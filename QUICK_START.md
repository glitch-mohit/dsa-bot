# 🚀 Quick Start Guide - DSA Bot GenAI

## ✅ Current Status
- ✅ Node.js installed (v22.11.0)
- ✅ Dependencies installed
- ✅ Server code updated with multiple model fallbacks
- ✅ Error handling improved

## 🎯 How to Run

### Step 1: Make sure .env file exists
Your `.env` file should contain:
```
GEMINI_API_KEY=your_actual_api_key_here
```

### Step 2: Start the Server
Open a terminal in the project directory and run:
```bash
node server.js
```

You should see:
```
✅ Gemini AI initialized
🚀 Server running on http://localhost:3000
📱 Open your browser and go to: http://localhost:3000
```

### Step 3: Open in Browser
Navigate to: **http://localhost:3000**

### Step 4: Test the Application
1. Type a coding question in the text area
2. Click "Ask Coding Instructor"
3. Wait for the AI response

## 🔧 Troubleshooting

### Issue: "Port 3000 already in use"
**Solution:** Kill the process using port 3000:
```bash
for /f "tokens=5" %a in ('netstat -ano ^| findstr :3000') do taskkill /F /PID %a
```
Then restart the server.

### Issue: "Failed to get answer: Server Error: 500"
**Solution:** The server will automatically try multiple model names:
- gemini-2.5-flash
- gemini-2.5-pro
- gemini-2.5-flash-lite
- gemini-1.5-pro
- gemini-1.5-flash
- gemini-pro

Check the server console to see which model is being used.

### Issue: "GEMINI_API_KEY is missing"
**Solution:** 
1. Create a `.env` file in the project root
2. Add: `GEMINI_API_KEY=your_api_key`
3. Get your API key from: https://makersuite.google.com/app/apikey

## 📝 Available Endpoints

- `GET /` - Main web interface
- `POST /ask` - Ask a coding question
- `GET /health` - Check if server is running

## 🎨 Features

- Dark/Light theme toggle
- Question history
- Coding tutorials links
- DSA topic resources
- Responsive design

## 🔍 Check Server Status

Visit: **http://localhost:3000/health** to check if the server is running properly.

## 📞 Need Help?

1. Check the server console for error messages
2. Verify your API key is valid
3. Make sure you have internet connection
4. Check if the Gemini API service is available

---

**Ready to code!** 🎉

