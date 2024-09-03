/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // other paths
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1.4s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-1rem)' },
        },
      },
    },
  },
  plugins: [],
}


