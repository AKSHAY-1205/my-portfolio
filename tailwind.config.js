/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
   variants: {
    extend: {
      scale: ['hover'],
      textColor: ['hover'],
      transform: ['hover'],
    },
  },
  plugins: [],
}

