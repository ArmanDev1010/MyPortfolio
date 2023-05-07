/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#EAEAEA;",
          200: "#1D1C20;",
          300: "#5f5e61;",
          400: "#ECEFF1;",
        },
      },
      fontFamily: {
        sfPro: ["sfPro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
