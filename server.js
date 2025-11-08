require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Check for API key on startup
if (!process.env.GEMINI_API_KEY) {
    console.error('❌ ERROR: GEMINI_API_KEY is missing from .env file!');
    console.error('Please create/update .env file with: GEMINI_API_KEY=your_api_key_here');
    process.exit(1);
}

// CORS configuration - allow localhost for development
const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests) or from localhost
        if (!origin || origin.startsWith('http://localhost') || origin.startsWith('http://127.0.0.1')) {
            callback(null, true);
        } else {
            callback(null, true); // Allow all origins for now (adjust for production)
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

// Serve static files (index.html)
app.use(express.static(path.join(__dirname)));

// Ensure index.html is served for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

let genAI;
try {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    console.log('✅ Gemini AI initialized');
} catch (error) {
    console.error('❌ ERROR initializing Gemini AI:', error.message);
    process.exit(1);
}

// Helper endpoint for health check
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        message: 'Server is running',
        apiKeyConfigured: !!process.env.GEMINI_API_KEY 
    });
});

app.post('/ask', async (req, res) => {
    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ error: 'Please provide a question' });
    }

    // Try multiple models in order of preference (newest first)
    const modelNames = [
        'gemini-2.5-flash',
        'gemini-2.5-pro', 
        'gemini-2.5-flash-lite',
        'gemini-1.5-pro',
        'gemini-1.5-flash',
        'gemini-pro'
    ];
    let lastError = null;

    for (const modelName of modelNames) {
        try {
            console.log(`🔄 Trying model: ${modelName}`);
            const model = genAI.getGenerativeModel({
                model: modelName,
                systemInstruction: `You are a Data Structure and Algorithm Instructor. You only reply to questions related to coding, data structures, or algorithms. Explain in simple terms. For non-coding questions, reply rudely: "You dumb, ask me coding questions only!"`
            });

            const result = await model.generateContent(question);
            const response = await result.response;
            const text = response.text();

            console.log(`✅ Successfully used model: ${modelName}`);
            return res.json({ answer: text });
        } catch (error) {
            console.log(`❌ Model ${modelName} failed: ${error.message}`);
            lastError = error;
            // Continue to next model
        }
    }

    // If all models failed
    console.error('❌ All models failed. Last error:', lastError);
    const errorMessage = lastError?.message || 'Unknown error';
    res.status(500).json({ 
        error: `Failed to get response from AI. Please check your API key and try again. Error: ${errorMessage}` 
    });
});

app.listen(port, () => {
    console.log(`\n🚀 Server running on http://localhost:${port}`);
    console.log(`📱 Open your browser and go to: http://localhost:${port}\n`);
}).on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`❌ ERROR: Port ${port} is already in use!`);
        console.error(`   Please stop the other application or change the PORT in .env file`);
    } else {
        console.error('❌ ERROR starting server:', error.message);
    }
    process.exit(1);
});