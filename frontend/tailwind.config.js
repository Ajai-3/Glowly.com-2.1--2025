/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "glowly-pink": "#e80071"
      },
      fontFamily: {
        philosopher: ['"Philosopher"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

