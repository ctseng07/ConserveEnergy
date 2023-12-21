/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['roboto', 'sans-serif'],
        'robotoSlab': ['Roboto Slab', "serif"],
      },
      colors: {
        green: "#247B46",
        orange: "#E06127"
      },
    },
    fontWeight: {
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      "extra-bold": 800,
      black: 900,
    },
  },
  plugins: [],
}