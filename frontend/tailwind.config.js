/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '90': '90deg',
        '-90': '-90deg',
      },
    },
  },
  plugins: [],
}