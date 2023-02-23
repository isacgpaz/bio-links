/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { left: '50%', transform: 'translateX(-55%)', opacity: 0 },
          '10%': { left: '50%', transform: 'translateX(-50%)', opacity: 1 },
          '90%': { left: '50%', transform: 'translateX(-50%)', opacity: 1 },
          '100%': { left: '50%', transform: 'translateX(-10%)', opacity: 0 },
        }
      },
      animation: {
        wiggle: 'wiggle 5000ms linear infinite'
      }
    },
  },
  plugins: [],
}
