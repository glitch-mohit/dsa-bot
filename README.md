# DSA Bot GenAI 🤖

An AI-powered coding instructor for Data Structures and Algorithms questions, powered by Google Gemini AI.

## Features

- 🎓 Ask coding questions and get AI-powered explanations
- 🌓 Dark/Light theme toggle
- 📚 Access to coding tutorials and resources
- 📝 Question history
- 🎨 Beautiful, modern UI
- 📱 Responsive design

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **AI**: Google Gemini API
- **Deployment**: Vercel (Serverless Functions)

## Quick Start

### Local Development

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd dsa-bot-genai
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file**
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

4. **Start the server**
```bash
npm start
```

5. **Open your browser**
```
http://localhost:3000
```

### Deploy to Vercel

See [DEPLOY_QUICK.md](./DEPLOY_QUICK.md) for quick deployment instructions.

Detailed deployment guide: [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)

## Project Structure

```
.
├── api/                 # Serverless functions for Vercel
│   ├── ask.js          # AI request handler
│   └── health.js       # Health check endpoint
├── index.html          # Frontend application
├── server.js           # Express server (for local dev)
├── vercel.json         # Vercel configuration
├── package.json        # Dependencies
└── README.md           # This file
```

## API Endpoints

### Local Development
- `GET /` - Main web interface
- `POST /ask` - Ask a coding question
- `GET /health` - Health check

### Vercel Deployment
- `GET /` - Main web interface
- `POST /api/ask` - Ask a coding question
- `GET /api/health` - Health check

## Environment Variables

- `GEMINI_API_KEY` - Your Google Gemini API key (required)
- `PORT` - Server port (optional, defaults to 3000)

Get your API key from: https://makersuite.google.com/app/apikey

## Documentation

- [Quick Start Guide](./QUICK_START.md)
- [Deployment Guide](./VERCEL_DEPLOY.md)
- [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)
- [Quick Deploy](./DEPLOY_QUICK.md)

## License

ISC

## Contributing

Feel free to submit issues and enhancement requests!

---

**Happy Coding! 🚀**
"# dsa" 
