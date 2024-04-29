import { useEffect, useState } from "react";

const Header = () => {

  const [ darkMode, setDarkMode]  = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode); 
  };

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode]);

  return (
  
    <header className="wrapper pt-10 px-6 h-[16rem] bg-neutral-lightTheme-veryPaleBlueTopBg font-bold rounded-b-[1.25rem] dark:bg-neutral-darkTheme-veryDarkBlueTopBg">
      <h1 className="text-[1.7rem] leading-[1.5rem] text-neutral-lightTheme-veryDarkBlueText dark:text-primary-white">Social Media Dashboard</h1>
      <p className="mt-2 mb-6 text-neutral-lightTheme-darkGrayishBlueText dark:text-neutral-darkTheme-desaturatedBlueText">Total Followers: 23,004</p>
      <hr className="mb-[1.2rem] bg-neutral-lightTheme-veryDarkBlueText"/>
      <div className="flex justify-between">
        <p className="text-neutral-lightTheme-darkGrayishBlueText dark:text-neutral-darkTheme-desaturatedBlueText">Dark Mode</p>
        <label htmlFor="dark_mode" className="relative p-[0.2rem] w-[3.2rem] h-[1.6rem] bg-lightTheme-toggle rounded-full cursor-pointer peer-checked:bg-darkTheme-toggle">

          <input 
          onClick={handleClick} 
          id="dark_mode" 
          type="checkbox" 
          className="sr-only peer"/>

          <div className="absolute top-0 left-0 w-full h-full rounded-full peer-checked:bg-toggleGradient"></div>

          <div className="w-[1.15rem] h-[1.15rem] bg-primary-white rounded-full peer-checked:bg-neutral-darkTheme-darkDesaturatedBlueCardBg peer-checked:translate-x-[1.66rem] transition-all duration-300"></div>
        </label>
      </div>
    </header>
     
  );
};

export default Header;

/**4:52:11 
 * 

*/
