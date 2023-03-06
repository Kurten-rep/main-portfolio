/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        matrix: {
          100: "#71f704",
          200: "#109c11",
          300: "#008F11",
          400: "#003B00",
          500: "#0D0208",
        },
      },
      screens: {
        "2xs": "160px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
