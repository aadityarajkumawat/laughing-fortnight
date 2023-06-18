/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#5282FF",
        black: "#121212",
        black1: "#1B1B1B",
        black2: "#2B2B2B",
        black3: "#494949",
      },
    },
  },
  plugins: [],
};
