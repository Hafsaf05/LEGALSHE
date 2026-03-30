/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        legal: {
          bg: '#0A0A0F',
          surface: '#131318',
          surfaceLow: '#1B1B20',
          surfaceHigh: '#2A292F',
          purple: '#7C3AED',
          purpleLight: '#D2BBFF',
          gold: '#F59E0B',
          goldDark: '#D97706',
          green: '#10B981',
          red: '#EF4444',
          text: '#F8FAFC',
          subtle: '#94A3B8'
        }
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        telugu: ['Noto Sans Telugu', 'sans-serif']
      },
      borderRadius: {
        'stitch': '20px',
        'btn': '50px'
      },
      blur: {
        'stitch': '16px'
      }
    },
  },
  plugins: [],
}
