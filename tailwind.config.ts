import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#2563eb",
          light: "#60a5fa",
          dark: "#1e40af",
        },
        secondary: {
          DEFAULT: "#7c3aed",
          light: "#a78bfa",
          dark: "#5b21b6",
        },
        accent: {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
        },
        navy: {
          DEFAULT: "#1e3a8a",
          light: "#3b82f6",
          dark: "#1e40af",
        },
      },
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        imagine: ["var(--font-imagine)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
