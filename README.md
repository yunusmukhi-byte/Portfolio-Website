# Yunus Mukhi — Portfolio

A personal portfolio built with React, Vite, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy to Vercel,
Netlify, GitHub Pages, or any static host.

## Updating the site

Everything you'll want to change over time — your About text, skills,
projects, learning progress, and social links — lives in one file:

```
src/data/portfolio.js
```

Open it, edit the relevant object, and save. You do not need to touch any
file inside `src/components/`. See the comments in `portfolio.js` for
exactly where each type of update goes (adding a project, moving a skill
from "upcoming" to "current", advancing a learning-journey stage, etc.).

## Project structure

```
src/
  components/   UI components — read content from data/portfolio.js
  data/
    portfolio.js  <- edit this file to update the site
  App.jsx
  main.jsx
```

## Deploying to GitHub Pages

This repo is configured to auto-deploy to:

```
https://yunusmukhi-byte.github.io/Portfolio-Website/
```

**One-time setup in GitHub:**

1. Push this repo to GitHub as `Portfolio-Website` (see commands below).
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**
   (not "Deploy from a branch"). This is the setting that was missing —
   it tells Pages to use the workflow in `.github/workflows/deploy.yml`
   instead of trying to serve raw source files.
4. Push to `main`. The "Deploy to GitHub Pages" workflow (visible under
   the **Actions** tab) will build the site with `npm run build` and
   publish `dist/` automatically. The first run can take a minute or two;
   watch it in the Actions tab.

**Why the site was blank before:** Vite's default build assumes the site
is served from the domain root, so it emits asset URLs like
`/assets/index.js`. On GitHub Pages your site actually lives under
`/Portfolio-Website/`, so the browser was requesting
`https://yunusmukhi-byte.github.io/assets/index.js` — which doesn't
exist, hence the 404 and the blank page. Setting `base: '/Portfolio-Website/'`
in `vite.config.js` fixes this by making every built asset path relative
to that subdirectory.

**Every future update:** just `git push` to `main` — the workflow rebuilds
and redeploys automatically, no manual steps.
