# 🚀 Deploy to Vercel - Step by Step Guide

## Prerequisites
1. A GitHub account (or GitLab/Bitbucket)
2. A Vercel account (sign up at https://vercel.com)
3. Your Gemini API key

## Step 1: Push Code to GitHub

1. Initialize git (if not already done):
```bash
git init
```

2. Create a `.gitignore` file (if it doesn't exist):
```bash
node_modules/
.env
.env.local
.DS_Store
*.log
.vercel
```

3. Add and commit your files:
```bash
git add .
git commit -m "Initial commit - DSA Bot GenAI"
```

4. Create a new repository on GitHub and push:
```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure your project:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: (leave empty - not needed)
   - **Output Directory**: (leave empty - not needed)
   - **Install Command**: `npm install`

5. **Add Environment Variable**:
   - Click "Environment Variables"
   - Add: `GEMINI_API_KEY`
   - Value: Your actual Gemini API key
   - Click "Save"

6. Click **"Deploy"**

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No**
   - What's your project's name? (Enter a name)
   - In which directory is your code located? **./**

5. Add environment variable:
```bash
vercel env add GEMINI_API_KEY
```
   - Enter your API key when prompted
   - Select environment: Production, Preview, Development (select all)

6. Deploy to production:
```bash
vercel --prod
```

## Step 3: Update CORS Settings (if needed)

After deployment, update the CORS settings in `api/ask.js` and `api/health.js` if you want to restrict access to specific domains.

## Step 4: Verify Deployment

1. Visit your Vercel deployment URL (e.g., `https://your-project.vercel.app`)
2. Test the application:
   - Open the website
   - Ask a coding question
   - Verify it works correctly

## Step 5: Get Your Production URL

After deployment, Vercel will provide you with:
- **Production URL**: `https://your-project.vercel.app`
- **Deployment URL**: `https://your-project-xyz.vercel.app`

## Important Notes

### Environment Variables
- Never commit your `.env` file to GitHub
- Always add environment variables through Vercel dashboard or CLI
- The `GEMINI_API_KEY` must be set in Vercel environment variables

### API Endpoints
- Local: `http://localhost:3000/ask`
- Vercel: `https://your-project.vercel.app/api/ask`

### File Structure
```
your-project/
├── api/
│   ├── ask.js          # Serverless function for AI requests
│   └── health.js       # Health check endpoint
├── index.html          # Frontend
├── vercel.json         # Vercel configuration
├── package.json        # Dependencies
└── .vercelignore       # Files to ignore in deployment
```

## Troubleshooting

### Issue: "GEMINI_API_KEY is not configured"
**Solution**: Make sure you added the environment variable in Vercel dashboard:
1. Go to your project settings
2. Click "Environment Variables"
3. Add `GEMINI_API_KEY` with your API key
4. Redeploy

### Issue: CORS errors
**Solution**: The CORS headers are already configured in the API functions. If you still get errors, check:
1. The API URL is correct (`/api/ask` not `/ask`)
2. The frontend is making requests to the correct endpoint

### Issue: "Function not found"
**Solution**: 
1. Make sure `api/ask.js` and `api/health.js` exist
2. Check `vercel.json` configuration
3. Redeploy the project

### Issue: Build fails
**Solution**:
1. Check that all dependencies are in `package.json`
2. Make sure Node.js version is compatible (Vercel uses Node 18.x by default)
3. Check build logs in Vercel dashboard

## Updating Your Deployment

After making changes:

1. Commit and push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push
```

2. Vercel will automatically redeploy (if connected to GitHub)
   OR manually deploy:
```bash
vercel --prod
```

## Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

---

**Your app is now live on Vercel! 🎉**

Visit your deployment URL to test it out.

