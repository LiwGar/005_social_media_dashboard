const Footer = () => {
  return (
    <footer id="attribution" className="wrapper w-[88%] py-4 text-center">
      <div 
        className="text-neutral-lightTheme-darkGrayishBlueText text-sm 
        dark:text-neutral-darkTheme-desaturatedBlueText">

        Challenge by <a 
          href="https://www.frontendmentor.io?ref=challenge" 
          target="_blank"
          className="text-primary-limeGreen font-semibold"
        >Frontend Mentor</a>. 

        Coded by <a 
          href="https://liwgar-portfolio.vercel.app/"
          className="text-primary-limeGreen font-semibold"
        >LiwGar</a>.
      </div>
    </footer>
  );
}

export default Footer;
