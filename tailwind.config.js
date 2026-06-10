/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#020205",
        secondary: "#9a95b8",
        tertiary: "#0c0a16",
        "black-100": "#0a0813",
        "black-200": "#050409",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #0a0a18",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};