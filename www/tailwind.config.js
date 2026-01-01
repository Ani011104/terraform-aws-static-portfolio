/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gray/Black theme
        primary: '#FACC15', // Yellow
        dark: {
          900: '#121212', // Main background
          800: '#1E1E1E', // Secondary background (cards)
          700: '#2A2A2A', // Borders/Hover
        },
        light: {
          100: '#FFFFFF',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
