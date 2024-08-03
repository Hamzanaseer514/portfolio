/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      },
      colors: {
        "light-blue": "#63b3ed",
        "lighter-blue": "#90cdf4",
        "very-light-blue": "#d6bcfa",
        "extremely-light-blue": "#ebf8ff",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(135deg, #63b3ed, #90cdf4, #d6bcfa, #ebf8ff)",
      },
    },
  },
  plugins: [],
};
