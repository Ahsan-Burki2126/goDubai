import React from "react";
import { ArrowRight } from "lucide-react";
const EventCard = ({ imgSrc, title, date }) => {
  return (
    <div className="w-full md:w-[48%] p-3 flex flex-col rounded-md bg-cardsBG">
      <img src={imgSrc} alt="info" className="w-full rounded-lg" />
      <h1 className="text-start font-bold text-2xl py-4 px-2 tracking-wide">
        {title}
      </h1>

      <div className="w-full flex items-center justify-between ">
        <p className="text-neutral-600  tracking-wide text-lg md:text-xl lg:text-2xl">
          {date}
        </p>
        <a
          href="#"
          className="bg-btnBG hover:bg-darkBlue transition-all duration-200 px-8 py-2 rounded-full"
        >
          <ArrowRight color="white" />
        </a>
      </div>
    </div>
  );
};

export default EventCard;
