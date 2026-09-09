import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#E26812",
          mango: "#FFC52D",
          umber: "#5E5745",
          dark: "#1a1410",
        },
      },
    },
  },
  plugins: [],
};

export default config;
