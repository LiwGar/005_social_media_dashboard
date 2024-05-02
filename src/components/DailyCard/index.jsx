import facebookLogo from "../../assets/images/icon-facebook.svg";
import twitterLogo from "../../assets/images/icon-twitter.svg";
import instagramLogo from "../../assets/images/icon-instagram.svg";
import youtubeLogo from "../../assets/images/icon-youtube.svg";
import iconUp from "../../assets/images/icon-up.svg";
import iconDown from "../../assets/images/icon-down.svg";

const socialNetworkLogo = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  YouTube: youtubeLogo,
};

const DailyCard = ({ statsType, socialNetwork, stats, percentage, isUp }) => {
  return (
    <article 
      className="w-[21.6rem] h-[8rem] mb-4 p-6 mx-auto bg-neutral-lightTheme-lightGrayishBlueCardBg 
        rounded-md dark:bg-neutral-darkTheme-darkDesaturatedBlueCardBg hover:brightness-[95%]  
        hover:dark:brightness-[130%] cursor-pointer lg:w-[15.4rem] xl:w-[19.8rem] 2xl:w-[21.6rem]">

      <div className="flex mb-[1.6rem] justify-between">

        <p 
          className="text-neutral-lightTheme-darkGrayishBlueText text-sm font-bold 
          dark:text-neutral-darkTheme-desaturatedBlueText">
          {statsType}
        </p>
        <img
          src={socialNetworkLogo[socialNetwork]}
          alt={`${socialNetwork}_logo`}
        />
      </div>

      <div className="flex justify-between">
        <p 
          className="mb-2 text-[2.2rem] leading-[1.5rem] text-neutral-lightTheme-veryDarkBlueText 
            font-bold dark:text-primary-white">
          {stats}
        </p>

        <div className="flex text-xs justify-center items-center font-extrabold gap-1">
          <img
            src={isUp ? iconUp : iconDown}
            className="items-center"
            alt="icon_arrow"
          />
          <p
            className={
              isUp ? "text-primary-limeGreen" : "text-primary-brightRed"
            }
          >
            {percentage}%
          </p>
        </div>
      </div>
    </article>
  );
};

export default DailyCard;
