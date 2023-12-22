/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        'card': 'rgba(0, 4, 28, 0)',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'robotoSlab': ['Roboto Slab', "serif"],
      },
      colors: {
        green: "#247B46",
        "caption-color": "#E06127",
        "title-color": "#111211",
        "body-color": "#3A3A3A",
        bone: "#F9F6EE",
        gray: "#9c9c9c",
        white: "#FFFFFF",
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