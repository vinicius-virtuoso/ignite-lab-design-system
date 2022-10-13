/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },

    colors: {
      transparent: "transparent",
      black: "#000000",
      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7C7C8A",
        100: "#E1E1E6",
      },
      cyan: {
        500: "#81d8F7",
        300: "#9be1fb",
      },
      red: {
        500: "#ED3333",
      },
    },
    extend: {
      fontFamily: {
        sans: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
