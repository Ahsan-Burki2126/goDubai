import React from "react";
import { ArrowRight } from "lucide-react";
const InfoCard = ({ imgSrc, title, description }) => {
  return (
    <div className="w-full md:w-[48%] p-3 flex flex-col rounded-md ">
      <img src={imgSrc} alt="info" className="w-full rounded-lg" />
      <h1 className="text-start font-bold text-2xl py-4 px-2 tracking-wide">
        {title}
      </h1>
      <p className="text-start w-full font-semibold text-xl tracking-widest text-neutral-800">
        {description}
      </p>
    </div>
  );
};

export default InfoCard;
