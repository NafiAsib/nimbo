/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-text": "rgb(var(--primary-text-color) / <alpha-value>)",
        "primary-background": "rgb(var(--primary-bg-color) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
