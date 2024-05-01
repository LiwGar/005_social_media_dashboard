import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [darkMode]);

  return (
    <header className="wrapper pt-10 px-6 h-[15.4rem] mb-[58rem] 
      bg-neutral-lightTheme-veryPaleBlueTopBg font-bold rounded-b-[1.25rem] 
      dark:bg-neutral-darkTheme-veryDarkBlueTopBg 
      dark:brightness-[110%]">

      <h1 
        className="text-[1.6rem] leading-[1.5rem] text-neutral-lightTheme-veryDarkBlueText
         dark:text-primary-white">
        Social Media Dashboard
      </h1>

      <p 
        className="mt-2 mb-6 text-neutral-lightTheme-darkGrayishBlueText 
        dark:text-neutral-darkTheme-desaturatedBlueText text-base">
        Total Followers: 23,004
      </p>

      <div 
        className="h-[0.01rem] mb-[1.2rem] bg-neutral-darkTheme-desaturatedBlueText md:hidden"></div>

      <div className="flex justify-between md:justify-normal md:gap-5">
        <p 
          className="text-neutral-lightTheme-darkGrayishBlueText 
          dark:text-neutral-darkTheme-desaturatedBlueText text-sm">
          Dark Mode
        </p>

        <label
          htmlFor="dark_mode"
          className="relative p-[0.14rem] w-[3rem] h-[1.4rem] bg-lightTheme-toggle 
          rounded-full cursor-pointer peer-checked:bg-darkTheme-toggle"
        >
          <input
            onClick={handleClick}
            id="dark_mode"
            type="checkbox"
            className="sr-only peer"
          />

          <div className="absolute top-0 left-0 w-full h-full rounded-full 
            dark:bg-toggleGradient"></div>

          <div className="absolute w-[1.13rem] h-[1.13rem] 
            bg-neutral-darkTheme-darkDesaturatedBlueCardBg rounded-full 
            peer-checked:bg-primary-white peer-checked:translate-x-[1.62rem] 
            transition-all duration-300"></div>
        </label>

      </div>

    </header>
  );
};

export default Header;
