/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F14',
        surface: '#10161D',
        surface2: '#151C24',
        border: '#212A33',
        text: '#E7EDF3',
        muted: '#8A96A3',
        faint: '#5B6672',
        accent: '#5CC8C0',
        accentDim: '#5CC8C022',
        learning: '#E3B341',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
