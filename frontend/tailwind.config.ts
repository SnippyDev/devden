import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["'Barlow Semi Condensed'", "sans-serif"],
        karla: ["'Karla'", "sans-serif"],
        rajdhani: ["'Rajdhani'", "sans-serif"],
        grotesk: ["'Space Grotesk'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
