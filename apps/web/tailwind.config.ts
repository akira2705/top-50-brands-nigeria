import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Manrope", "Segoe UI", "sans-serif"],
        signature: ["Allura", "cursive"],
      },
      colors: {
        brand: {
          ivory: "#FFFDF7",
          cream: "#F7F5EB",
          ink: "#182016",
          muted: "#596357",
          gold: "#F0C650",
          saffron: "#B8860B",
          emerald: "#0F6D48",
          jade: "#1E8A5C",
          royal: "#0A3B29",
        },
      },
      boxShadow: {
        halo: "0 24px 70px rgba(11, 50, 33, 0.12)",
        glow: "0 18px 60px rgba(240, 198, 80, 0.24)",
        soft: "0 18px 42px rgba(18, 32, 20, 0.07)",
      },
      backgroundImage: {
        "brand-radials":
          "radial-gradient(circle at top left, rgba(240,198,80,0.24), transparent 25%), radial-gradient(circle at 85% 12%, rgba(15,109,72,0.17), transparent 20%), linear-gradient(180deg, #fffef9 0%, #fffdf7 38%, #f7f8f1 100%)",
        "gold-band":
          "linear-gradient(120deg, #f6d778, #F0C650, #fbefc3)",
      },
    },
  },
  plugins: [],
};

export default config;
