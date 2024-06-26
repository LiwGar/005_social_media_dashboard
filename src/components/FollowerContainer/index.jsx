import data from "../../../backend/data.json";
import FollowerCard from "../FollowerCard";

const FollowersContainer = () => {
  return (
    <section className="absolute top-[12.6rem] left-0 right-0 mx-auto md:flex md:flex-wrap
      lg:flex-nowrap lg:w-[90%] lg:gap-4 xl:max-w-[1440px]">
      {data.followersStats.map((object) => (
        <FollowerCard
          key={object.id}
          socialNetwork={object.socialNetwork}
          user={object.user}
          audience={object.audience}
          audienceType={object.audienceType}
          today={object.today}
          isUp={object.isUp}
        />
      ))}
    </section>
  );
};

export default FollowersContainer;
