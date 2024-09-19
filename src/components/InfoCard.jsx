import React from "react";
import { ArrowRight } from "lucide-react";
const InfoCard = ({ imgSrc, title, description, date }) => {
  return (
    <div className="w-full md:w-1/2 p-3 flex flex-col rounded-md ">
      <img src={imgSrc} alt="info" className="w-full rounded-lg" />
      <h1 className="text-start font-bold text-2xl py-4 px-2 tracking-wide">
        {title}
      </h1>
      <p className="text-start w-full font-semibold text-xl tracking-widest text-neutral-800">
        {description}
      </p>
      {/* <div className="w-full flex items-center justify-between">
        <p className="text-neutral-600 tracking-wide text-lg">{date}</p>
        <a href="#">
          <ArrowRight />
        </a>
      </div> */}
    </div>
  );
};

export default InfoCard;
