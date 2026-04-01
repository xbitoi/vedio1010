# SocialSync Pro

This is a React application built with Vite, Tailwind CSS, and Framer Motion. It is designed to be fully compatible with GitHub Pages.

## How to Publish to GitHub Pages

Since this project uses Vite, deploying to GitHub Pages is very straightforward. The `vite.config.ts` is already configured with `base: './'` to ensure all assets load correctly regardless of your repository name.

### Method 1: Using GitHub Actions (Recommended)

1. Push your code to a GitHub repository.
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment**, change the **Source** to **GitHub Actions**.
4. GitHub will suggest a "Static HTML" or "Node.js" workflow. You can create a new file `.github/workflows/deploy.yml` in your repository with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. Commit and push this file. GitHub Actions will automatically build and deploy your site!

### Method 2: Using `gh-pages` npm package (Manual)

1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add these scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist",
     ...
   }
   ```
3. Run the deploy command:
   ```bash
   npm run deploy
   ```
4. Go to your repository **Settings** > **Pages** and ensure the source is set to the `gh-pages` branch.

## Features Included
- **Terms of Service & Privacy Policy**: Included directly in the login screen as modals to comply with TikTok API review requirements.
- **SPA Routing**: The app uses state-based routing, which works perfectly on GitHub Pages without needing complex `404.html` redirects.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
