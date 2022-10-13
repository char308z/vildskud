/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        9: "repeat(9, minmax(100px, auto))",
      },

      gridRowStart: {
        8: "8",
        9: "9",
      },

      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
      },
      colors: {
        primary: "#A00000",
        secondary: "#DCA0A0",
        sort: "#222222",
        hvid: "#FDFDFD",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
