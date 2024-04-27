/** @type {import('tailwindcss').Config} */
export default {
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
        inter: ["Inter", 'sans-serif']
      },
      colors: {
        primary: {
          limeGreen: "hsl(163, 72%, 41%)",
          brightRed: "hsl(356, 69%, 56%)",
        
          Facebook: "hsl(208, 92%, 53%)",
          Twitter: "hsl(203, 89%, 53%)",
          Instagram: "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
          YouTube: "hsl(348, 97%, 39%)",
        },
        darkTheme: {
          Toggle: "linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)",
        },
        lightTheme: {
          Toggle: "hsl(230, 22%, 74%)",
        },
        neutral: {
          darkTheme: {
            veryDarkBlueBg: "hsl(230, 17%, 14%)",
            veryDarkBlueTopBg: "hsl(232, 19%, 15%)",
            darkDesaturatedBlueCardBg: "hsl(228, 28%, 20%)",
            desaturatedBlue: "hsl(228, 34%, 66%)",
            White: "hsl(0, 0%, 100%)",
          },
          lightTheme: {
            WhiteBg: "hsl(0, 0%, 100%)",
            veryPaleBlueTopBg: "hsl(225, 100%, 98%)",
            lightGrayishBlueCardBg: "hsl(227, 47%, 96%)",
            darkGrayishBlueText: "hsl(228, 12%, 44%",
            veryDarkBlueText: "hsl(230, 17%, 14%)",
          },
        }
      }
    },
  },
  plugins: [],
}

