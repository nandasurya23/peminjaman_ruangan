module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "prime-1": "#032038",
        "prime-2": "#1ECAD3",
        "prime-3": "#38D430",
        "prime-4": "#E1251B",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
