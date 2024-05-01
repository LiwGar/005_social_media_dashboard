import data from "../../../backend/data.json";
import DailyCard from "../DailyCard";

const DailyContainer = () => {
  return (
    <section className="">
      <h1
        className="wrapper w-[88%] h-8 mb-6 text-[1.6rem] leading-[1.5rem] 
      text-neutral-lightTheme-veryDarkBlueText dark:text-primary-white font-bold"
      >
        Overview - Today
      </h1>

      {data.dailyStats.map((object) => (
        <DailyCard
          key={object.id}
          socialNetwork={object.socialNetwork}
          statsType={object.statsType}
          stats={object.stats}
          percentage={object.percentage}
          isUp={object.isUp}
        />
      ))}
    </section>
  );
};

export default DailyContainer;
