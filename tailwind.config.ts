import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveAround: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(100px, 50px)' },
          '50%': { transform: 'translate(50px, 100px)' },
          '75%': { transform: 'translate(-50px, 50px)' },
        }
      },
      animation: {
        moveAround: 'moveAround 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
