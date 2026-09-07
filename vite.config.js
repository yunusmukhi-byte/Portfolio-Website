import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 'base' must match the GitHub Pages repo path exactly (with leading and
// trailing slashes) so that built asset URLs resolve under
// https://yunusmukhi-byte.github.io/Portfolio-Website/ instead of the
// domain root. This is the root cause of the blank page / 404s: without
// it, Vite emits absolute asset paths like "/assets/index.js", which only
// work if the site is served from the domain root.
export default defineConfig({
  base: '/Portfolio-Website/',
  plugins: [react()],
})
