# How to Run DSA Bot GenAI

## Prerequisites
1. **Node.js** installed (version 14 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **Google Gemini API Key**
   - Get your API key from: https://makersuite.google.com/app/apikey
   - Or visit: https://ai.google.dev/

## Setup Steps

### Step 1: Install Dependencies
Open terminal/command prompt in the project directory and run:
```bash
npm install
```

### Step 2: Create Environment File
Create a `.env` file in the project root directory with your Gemini API key:
```
GEMINI_API_KEY=your_api_key_here
```

**Important:** Replace `your_api_key_here` with your actual Gemini API key.

### Step 3: Run the Server
Start the server using one of these commands:
```bash
npm start
```
OR
```bash
node server.js
```

### Step 4: Access the Application
Open your web browser and navigate to:
```
http://localhost:3000
```

## What the Application Does
- Provides a web interface for asking coding questions
- Uses Google Gemini AI to answer DSA (Data Structures and Algorithms) questions
- Features a dark/light theme toggle
- Stores question history in browser localStorage
- Provides links to coding tutorials and resources

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can change it by setting the PORT environment variable:
```bash
set PORT=3001
npm start
```

### API Key Error
Make sure:
- Your `.env` file exists in the project root
- The API key is correct and not expired
- The file is named exactly `.env` (not `.env.txt`)

### Dependencies Not Installed
If you get module errors, run:
```bash
npm install
```

## Project Structure
- `server.js` - Express server and API endpoints
- `index.html` - Frontend web interface
- `DSA.js` - Standalone script to test Gemini API
- `package.json` - Project dependencies and scripts

