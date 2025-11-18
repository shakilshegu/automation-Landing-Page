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
          DEFAULT: "#0043ff",
          light: "#4d7bff",
          dark: "#0033cc",
        },
        secondary: {
          DEFAULT: "#00d4ff",
          light: "#4de0ff",
          dark: "#00a8cc",
        },
        accent: {
          DEFAULT: "#0043ff",
          light: "#4d7bff",
          dark: "#0033cc",
        },
        navy: {
          DEFAULT: "#001a66",
          light: "#0043ff",
          dark: "#001133",
        },
        automation: {
          DEFAULT: "#0043ff",
          light: "#4d7bff",
          dark: "#0033cc",
          50: "#e6eeff",
          100: "#b3ccff",
          200: "#80aaff",
          300: "#4d88ff",
          400: "#1a66ff",
          500: "#0043ff",
          600: "#0036cc",
          700: "#002999",
          800: "#001c66",
          900: "#000f33",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
