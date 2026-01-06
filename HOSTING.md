# Hosting Guide

This guide covers how to deploy the **BiteVue** application to popular hosting platforms like Vercel and Netlify.

## Vercel (Recommended)

Vercel is the creators of Next.js and provides excellent support for Vite/React applications.

1.  **Create a Vercel Account**: Go to [vercel.com](https://vercel.com/) and sign up.
2.  **Install Vercel CLI** (Optional but recommended):
    ```bash
    npm i -g vercel
    ```
3.  **Deploy via Dashboard**:
    *   Push your code to a GitHub repository.
    *   Log in to Vercel and click **"Add New..."** -> **"Project"**.
    *   Import your GitHub repository.
    *   Vercel will automatically detect that it's a **Vite** project.
    *   **Build Command**: `npm run build` (or `vite build`)
    *   **Output Directory**: `dist`
    *   Click **Deploy**.

4.  **Deploy via CLI**:
    *   Run `vercel` in your project root.
    *   Follow the prompts.

### Common Issues: "npm error enoent package.json"

If your build fails with `npm error enoent Could not read package.json`, it usually means your `package.json` is not in the root of your GitHub repository (it might be in a subfolder).

**Fix in Vercel Dashboard:**
1.  Go to your Project Settings on Vercel.
2.  Scroll down to the **"Root Directory"** section.
3.  Click **Edit**.
4.  Enter the name of the folder where your `package.json` is located (e.g., `bitevue-your-ai-food-guide-main`).
5.  Click **Save**.
6.  Go to the **Deployments** tab and redeploy.

## Netlify

Netlify is another fast and reliable option for hosting static sites and SPAs.

1.  **Create a Netlify Account**: Go to [netlify.com](https://netlify.com/) and sign up.
2.  **Deploy via Dashboard**:
    *   Push your code to GitHub.
    *   Log in to Netlify and click **"Add new site"** -> **"Import from existing project"**.
    *   Connect to GitHub and select your repository.
    *   **Build Command**: `npm run build`
    *   **Publish directory**: `dist`
    *   Click **Deploy**.

3.  **Handling Client-Side Routing (Important for SPA)**:
    *   If you encounter 404 errors on refresh, you might need a `_redirects` file in your `public` folder.
    *   Create a file named `public/_redirects` with the following content:
        ```
        /*  /index.html  200
        ```
    *   This ensures all requests are handled by React Router.

## Manual Build & Deploy

If you want to host it on a traditional server (Apache/Nginx):

1.  Run `npm run build`.
2.  Upload the contents of the `dist` folder to your server's public html directory.
3.  Configure your server to redirect all 404s to `index.html` to support client-side routing.
