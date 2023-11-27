/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      helvetica: ["Helvetica Now Display", "sans"],
    },
    extend: {
      colors: {
        light: "#ffffff",
        sand: "#f4f5ef",
        ultraDark: "#000000",
        dark: "#150c0f",
        mediumDark: "#201317",
        red: "#ff2803",
        blue: "#1795f0",
        green: "#30e462",
        yellow: "#f5d010",
      },
      height: {
        nav: "60px",
      },
    },
  },
  plugins: [],
};
