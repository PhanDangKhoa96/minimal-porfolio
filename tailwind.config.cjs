/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    container: {
      center: true,
      padding: "20px"
    },
    extend: {
      colors: {
        "dark-silver": "#6e6e6e",
        "light-silver": "#d7d7d7",
        "raisin-black": "#212121"
      }
    },
  },
  plugins: [],
}
