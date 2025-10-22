# Deployment Guide - Aarvi Ethnic Studio

## Quick Deployment Options

### Option 1: Netlify (Recommended)

1. **Connect Repository**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Connect your GitHub repository
   
2. **Build Settings**
   ```
   Build command: cd frontend && yarn build
   Publish directory: frontend/build
   ```

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live in 2-3 minutes

### Option 2: Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd /app/frontend
   yarn build
   vercel --prod
   ```

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   cd /app/frontend
   yarn add -D gh-pages
   ```

2. **Add to package.json**
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "yarn build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**
   ```bash
   yarn deploy
   ```

### Option 4: AWS S3 + CloudFront

1. **Build**
   ```bash
   cd /app/frontend
   yarn build
   ```

2. **Upload to S3**
   - Create S3 bucket
   - Enable static website hosting
   - Upload contents of /build folder

3. **Setup CloudFront**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom domain (optional)

## Custom Domain Setup

### For Netlify/Vercel
1. Go to Domain settings
2. Add custom domain
3. Update DNS records as instructed

### DNS Records (Example)
```
Type: A
Name: @
Value: [Provided by hosting]

Type: CNAME
Name: www
Value: [Provided by hosting]
```

## Environment Variables

For production, ensure these are set:
- `REACT_APP_BACKEND_URL` (if backend added later)
- `PUBLIC_URL` (for custom domains)

## Pre-Deployment Checklist

- [ ] All images loading correctly
- [ ] WhatsApp links working
- [ ] Instagram links updated
- [ ] Contact information accurate
- [ ] Mobile responsiveness tested
- [ ] All pages accessible
- [ ] Production build successful
- [ ] SEO meta tags in place
- [ ] Favicon updated

## Performance Optimization

Already implemented:
✅ Lazy loading images
✅ Optimized bundle size (78KB gzipped)
✅ Minified CSS and JS
✅ Tree-shaking enabled
✅ Code splitting

## SSL Certificate

Most hosting platforms (Netlify, Vercel, GitHub Pages) provide free SSL certificates automatically.

## Monitoring

Consider adding:
- Google Analytics
- Google Search Console
- Hotjar for user behavior
- Sentry for error tracking

## Backup

Always keep:
- Source code in Git
- Product images backed up
- Regular exports of any data

---

**Need Help?**
Contact: +91-9876543210
