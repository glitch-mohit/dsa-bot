# 🚀 Quick Deploy to Vercel

## Fastest Way to Deploy (5 minutes)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Ready for Vercel deployment"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. **Go to**: https://vercel.com
2. **Click**: "Add New Project"
3. **Import** your GitHub repository
4. **Configure**:
   - Framework: **Other**
   - Root Directory: `./`
   - Build Command: *(leave empty)*
   - Output Directory: *(leave empty)*
5. **Add Environment Variable**:
   - Name: `GEMINI_API_KEY`
   - Value: *Your Gemini API key*
6. **Click**: "Deploy"

### Step 3: Done! 🎉

Your app will be live at: `https://your-project.vercel.app`

---

## What Was Created

✅ `api/ask.js` - Serverless function for AI requests  
✅ `api/health.js` - Health check endpoint  
✅ `vercel.json` - Vercel configuration  
✅ `.gitignore` - Git ignore rules  
✅ `.vercelignore` - Vercel ignore rules  
✅ Updated `index.html` - Uses `/api/ask` for production  

## Important Notes

1. **Never commit** your `.env` file
2. **Always add** `GEMINI_API_KEY` in Vercel dashboard
3. **API endpoint** changes from `/ask` (local) to `/api/ask` (Vercel)

## Need Help?

See `VERCEL_DEPLOY.md` for detailed instructions.

---

**That's it! Your app is now live! 🚀**

