import data from "../../../backend/data.json";
import DailyCard from "../DailyCard";

const DailyContainer = () => {
  return (
    <section className="mx-auto xl:max-w-[1440px]">
      <h1
        className="wrapper w-[90%] h-8 mb-6 text-[1.6rem] leading-[1.5rem] 
      text-neutral-lightTheme-veryDarkBlueText dark:text-primary-white font-bold 
        xl:max-w-[1440px]"
      >
        Overview - Today
      </h1>

      <div className="flex flex-wrap mx-auto lg:w-[92%] 2xl:w-full">
        {data.dailyStats.map((object) => (
          <DailyCard
            key={object.id}
            socialNetwork={object.socialNetwork}
            statsType={object.statsType}
            stats={object.stats}
            percentage={object.percentage}
            isUp={object.isUp}
          />
        ))};
      </div>
     
    </section>
  );
};

export default DailyContainer;
