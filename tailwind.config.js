module.exports = {
  content: ["./src/**/*.tsx"],
    theme: {
      colors: {
        "black": {
          0: "#131020",
          1: "#1a1823",
          2: "#1e1d2f",
          3: "#302d41"
        },
        "white": "#d9e0ee",
        "red": "#f28fad",
        "peach": "#f8bd96",
        "yellow": "#fae3b0",
        "green": "#abe9b3",
        "teal": "#b5e8e0",
        "blue": "#96cdfb",
        "lavender": "#c9cbff"
      },
    fontFamily: {
      "body": ["JetBrains Mono", "sans-serif"],
    },
    extend: {
      animation:{
        'fade-1': 'fadein 4s ease',
        'fade-2': 'fadein 5s ease',
        'fade-3': 'fadein 6s ease',
        'fade-4': 'fadein 7s ease'
      },

      keyframes: theme => ({
        fadein: {
          '0%': {opacity: 0},
          '100%': { opacity:1 },
        },
      }),
    }
  },
  plugins: [],
}
