/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{html,js}',
    './src/**/*.{html,js,ts,jsx,tsx,mdx}',
    './**/*.{html,js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"]
      },
      colors: {
        primary: {
          limeGreen: "hsl(163, 72%, 41%)",
          brightRed: "hsl(356, 69%, 56%)",
          white: "hsl(0, 0%, 100%)",
        
          Facebook: "hsl(208, 92%, 53%)",
          Twitter: "hsl(203, 89%, 53%)",
          Instagram: "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
          YouTube: "hsl(348, 97%, 39%)",
        },
        lightTheme: {
          toggle: "hsl(230, 22%, 74%)",
        },
        neutral: {
          darkTheme: {
            veryDarkBlueTopBg: "hsl(232, 19%, 15%)",
            veryDarkBlueBg: "hsl(230, 17%, 14%)",
            darkDesaturatedBlueCardBg: "hsl(228, 28%, 20%)",
            desaturatedBlueText: "hsl(228, 34%, 66%)",
          },
          lightTheme: {
            veryPaleBlueTopBg: "hsl(225, 100%, 98%)",
            lightGrayishBlueCardBg: "hsl(227, 47%, 96%)",
            darkGrayishBlueText: "hsl(228, 12%, 44%)",
            veryDarkBlueText: "hsl(230, 17%, 14%)",
          },
        }
      },
      backgroundImage: {
        toggleGradient: "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
        instagram: "linear gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
      },
    },
  },
  plugins: [],
}

