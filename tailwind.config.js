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
        cardsBG: "#f3f8fe",
        btnBG: "#ed1b36",
        btnHover: "#ed1b36",
        textHover: "#ed1b36",
      },

      backgroundImage: {
        articleHero: "url('/hero.png')",
        eventHero: "url('/hero (1).png')",
        hotelHero: "url('/hero (2).png')",
        groupHero: "url('/hero (3).png')",
        packagesHero: "url('/hero (4).png')",
        homeHero: "url('/hero2.png')",
      },
    },
  },
  plugins: [],
};
