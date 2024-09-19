import { packages } from "./src/constants/data";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#020a21",
        lightBlue: "#10203a",
        largeText: "#060606",
        cardsBG: "#060606",
        btnBG: "#ed1b36",
        btnHover: "#ed1b36",
        textHover: "#ed1b36",
      },
      backgroundImage: {
        articleHero: "url('/src/assets/hero.png')",
        eventHero: "url('src/assets/hero (1).png')",
        hotelHero: "url('src/assets/hero (2).png')",
        groupHero: "url('src/assets/hero (3).png')",
        packagesHero: "url('src/assets/hero (4).png')",
        homeHero: "url('/src/assets/hero2.png')",
      },
    },
  },
  plugins: [],
};
