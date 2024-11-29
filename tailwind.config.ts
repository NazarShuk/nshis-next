import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: "white",
            },
            h2: {
              fontSize: '2rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
              color: "white",
            },
            h3: {
              fontSize: '1.75rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
              color: "white",
            },
            p:{
              color: "white",
            },
            ul: {
              color: "white",
            },
            li: {
              color: "white",
            },
            a: {
              color: "white",
            },
          }
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
} satisfies Config;
