/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      light: "#d2d2d2",
      dark: "#282829",
      yellow: "#f5d010",
    },
    fontFamily: {
      helvetica: ["Helvetica Now Display", "sans"],
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
