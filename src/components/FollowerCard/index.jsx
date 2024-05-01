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

const socialNetworkColors = {
  Facebook: "bg-primary-facebook",
  Twitter: "bg-primary-twitter",
  Instagram: "bg-instagramGradient",
  YouTube: "bg-primary-youTube",
};

const FollowerCard = ({
  user,
  audience,
  audienceType,
  today,
  socialNetwork,
  isUp,
}) => {
  return (
    <article 
      className="wrapper w-[88%] h-[13.5rem] mb-6 bg-neutral-lightTheme-lightGrayishBlueCardBg 
        text-center rounded-b-md dark:bg-neutral-darkTheme-darkDesaturatedBlueCardBg 
        hover:brightness-(1) hover:dark:brightness-[130%] cursor-pointer">

      <div
        className={`${socialNetworkColors[socialNetwork]} h-[0.3rem] mb-8 rounded-t-xl`}
      ></div>

      <div className="flex items-center place-content-center mb-[1.28rem] gap-2">
        <img
          src={socialNetworkLogo[socialNetwork]}
          alt={`${socialNetwork}_logo`}
        />

        <p 
          className="text-neutral-lightTheme-darkGrayishBlueText text-xs font-bold 
          dark:text-neutral-darkTheme-desaturatedBlueText">
          {user}
        </p>
      </div>

      <p 
        className="mb-2 text-[3.5rem] leading-[3rem] text-neutral-lightTheme-veryDarkBlueText
        font-bold dark:text-primary-white">
        {audience}
      </p>

      <p className="mb-5 text-neutral-lightTheme-darkGrayishBlueText uppercase tracking-[0.3rem] text-xs dark:text-neutral-darkTheme-desaturatedBlueText">
        {audienceType}
      </p>

      <div className="flex text-xs justify-center items-center font-extrabold gap-1">

        <img
          src={isUp ? iconUp : iconDown}
          className="items-center"
          alt="icon_arrow"
        />
        <p
          className={isUp ? "text-primary-limeGreen" : "text-primary-brightRed"}
        >
          {today} Today
        </p>

      </div>

    </article>
  );
};

export default FollowerCard;


