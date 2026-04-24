import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070f",
        slate: "#0f1729",
        glow: "#94a3ff",
        gold: "#d4af37"
      },
      boxShadow: {
        cinematic: "0 24px 60px -30px rgba(0, 0, 0, 0.8)"
      }
    }
  },
  plugins: []
};

export default config;
