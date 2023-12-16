/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "320px", max: "426px" },
        md: "768px",
        lg: "1024px",
        xl: { min: "1440px", max: "2560px" },
      },
      colors: {
        darkGray: "#242424",
        darkLinear: "#000000",
        grayIco: "#8A8A8A",
        purpleLight: "#DA00FE",
        purpleDark: "#A100ED",
      },
    },
  },
  plugins: [],
};
