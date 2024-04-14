/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blush: "#FEE3E0",
        "pastel-pink": "#FF8FA3",
        "pastel-red": "#FD748D",
      },
      fontSize: {
        xxs: ".625rem",
        xxxs: ".5rem",
      },
    },
    fontFamily: {
      sans: ["Press Start 2P"],
    },
  },
  plugins: [],
};
