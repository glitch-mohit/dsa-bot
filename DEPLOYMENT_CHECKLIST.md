# ✅ Vercel Deployment Checklist

## Pre-Deployment

- [ ] Code is pushed to GitHub repository
- [ ] `.env` file is NOT committed (check `.gitignore`)
- [ ] All dependencies are in `package.json`
- [ ] `api/ask.js` and `api/health.js` exist
- [ ] `vercel.json` is configured correctly
- [ ] `index.html` uses `/api/ask` for production

## Deployment Steps

### 1. GitHub Setup
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Verify `.gitignore` excludes sensitive files

### 2. Vercel Setup
- [ ] Sign up/Login to Vercel (https://vercel.com)
- [ ] Create new project
- [ ] Import GitHub repository
- [ ] Configure project settings:
  - [ ] Framework: Other
  - [ ] Root Directory: `./`
  - [ ] Build Command: (leave empty)
  - [ ] Output Directory: (leave empty)
  - [ ] Install Command: `npm install`

### 3. Environment Variables
- [ ] Add `GEMINI_API_KEY` in Vercel dashboard
- [ ] Set value to your actual API key
- [ ] Enable for: Production, Preview, Development

### 4. Deploy
- [ ] Click "Deploy" button
- [ ] Wait for deployment to complete
- [ ] Check deployment logs for errors

### 5. Testing
- [ ] Visit deployment URL
- [ ] Test health endpoint: `https://your-project.vercel.app/api/health`
- [ ] Test AI endpoint with a coding question
- [ ] Verify CORS is working
- [ ] Check browser console for errors

## Post-Deployment

- [ ] Update CORS in `api/ask.js` if needed (for custom domains)
- [ ] Test all features:
  - [ ] Ask coding questions
  - [ ] Dark/Light theme toggle
  - [ ] Question history
  - [ ] Tutorials section
- [ ] Monitor Vercel logs for any issues
- [ ] Set up custom domain (optional)

## Quick Commands

### Deploy via CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variable
vercel env add GEMINI_API_KEY

# Deploy to production
vercel --prod
```

### Check Deployment Status
```bash
vercel ls
```

### View Logs
```bash
vercel logs
```

## Troubleshooting

### Common Issues
1. **Environment variable not set**
   - Go to Vercel dashboard → Settings → Environment Variables
   - Add `GEMINI_API_KEY` with your API key

2. **CORS errors**
   - Check API URL in `index.html` (should be `/api/ask`)
   - Verify CORS headers in `api/ask.js`

3. **Function not found**
   - Ensure `api/` directory exists
   - Check `vercel.json` routes configuration

4. **Build fails**
   - Check Node.js version (should be 18.x)
   - Verify all dependencies in `package.json`
   - Check build logs in Vercel dashboard

## Files Structure

```
.
├── api/
│   ├── ask.js          ✅ Serverless function for AI
│   └── health.js       ✅ Health check endpoint
├── index.html          ✅ Frontend
├── vercel.json         ✅ Vercel configuration
├── package.json        ✅ Dependencies
├── .gitignore          ✅ Git ignore rules
└── .vercelignore       ✅ Vercel ignore rules
```

---

**Ready to deploy! 🚀**

