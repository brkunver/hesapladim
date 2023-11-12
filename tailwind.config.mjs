/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        koyu: "#264653",
        "koyu-darker": "#172b33",
        orta: "#2A9D8F",
        orta2: "#E76F51",
        acik: "#E9C46A",
        acik2: "#F4A261",
        acik3: "#06D6A0",
      },
      fontFamily: {
        duz: ["Roboto"],
        sekilli: ["Lora"],
      },
    },
  },
  plugins: [],
}
