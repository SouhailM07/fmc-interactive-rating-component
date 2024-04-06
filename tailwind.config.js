/** @type {import(tailwindcss).Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryOrange: 'hsl(25, 97%, 53%)',
        NeutralWhite: 'hsl(0, 0%, 100%)',
        NeutralLightGrey: 'hsl(217, 12%, 63%)',
        NeutralMediumGrey: 'hsl(216, 12%, 54%)',
        NeutralDarkBlue: 'hsl(213, 19%, 18%)',
        NeutralVeryDarkBlue: 'hsl(216, 12%, 8%)',
      },
    }
  },
  plugins: [],
};
