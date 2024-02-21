/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#021017",
        secondary: "#e4f4f7",
        tertiary: "#04202e",
        "black-100": "#052536",
        "black-200": "#062a3e",
        "white-100": "#e4f4f7",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "hero1-pattern": "url('/src/assets/herobg1.png')",
        "secondpage-pattern": "url('/src/assets/herobg2.png')",
      },
    },
  },
  plugins: [],
};