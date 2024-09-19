import React from "react";

const SectionTitle = ({ value, desc }) => {
  return (
    <>
      <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl w-full tracking-widest lg:tracking-wide py-5 px-4 sm:px-10 md:px-24 lg:px-48 mx-auto text-largeText">
        {value}
      </h1>
      <p className="text-center mx-auto  text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider text-neutral-700 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] leading-relaxed sm:leading-loose md:leading-loose ">
        {desc}
      </p>
    </>
  );
};

export default SectionTitle;
