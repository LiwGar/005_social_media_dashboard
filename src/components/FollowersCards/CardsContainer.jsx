import data from "../../../backend/data.json";
import FollowerCard from "../FollowerCard"

const CardsContainer = () => {

  return (
    <section className="absolute top-[12.6rem] left-0 right-0">
      {
        data.followersStats.map(object =>

          <FollowerCard 
            key={object.id}
            socialNetwork={object.socialNetwork}
            user={object.user}
            audience={object.audience}
            audienceType={object.audienceType}
            today={object.today}
            isUp={object.isUp}
          />
        )
      }
    </section>
  );
};

export default CardsContainer; 

