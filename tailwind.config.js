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
      },
    },
  },
  plugins: [],
}