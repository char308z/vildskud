/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A00000",
        secondary: "#DCA0A0",
        sort: "#222222",
        hvid: "#FDFDFD",
      },
      fontFamily: {
        cond: ["HelveticaNeue-Condensed", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
