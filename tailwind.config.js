/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "lightest": "#5e6670",
        "lighter": "#202429",
        "light": "#171717",
        "dark": "#141414",
        "scrollbar-bg": "#141414",
        "scrollbar-thumb-bg": "#323232",
        "scrollbar-thumb-hover": "#484848",
        "accent-1": "#5436ff",
        "accent-2": "#cc00ff",
        "code-color-1": "#F97583", // Declarations
        "code-color-2": "#B392F0", // Functions
        "code-color-3": "#E1E4E8", // Default
        "code-color-4": "#D19A66", // Strings
        "code-color-5": "#9ECBFF", // Strings
      },
      screens: {
        "xs": "551px",
      }
    },
  },
  plugins: [],
}
