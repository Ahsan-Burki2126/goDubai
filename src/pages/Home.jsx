import React from "react";
import { ArrowRight } from "lucide-react"; // Using an arrow icon from lucide-react
import vip from "../assets/vip.jpg";
import experience2 from "../assets/experience2.jpg";
import event8 from "../assets/event8.jpg";
import event9 from "../assets/event9.jpg";
import about from "../assets/about.jpg";
import InfoCard from "../components/InfoCard";
import SectionTitle from "../components/SectionTitle";
import EventCard from "../components/EventCard";
const Home = () => {
  return (
    <>
      {/* Hero section with centered content */}
      <section className="relative bg-homeHero bg-cover bg-center bg-no-repeat h-full md:bg-textHover xl:h-screen lg:h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto  lg:mb-36 md:mb-36 text-center lg:text-start md:text-start">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-darkBlue px-5 tracking-wide">
            Elite Travel <br className="hidden sm:inline" /> Explore
          </h1>

          <a
            href="#"
            className="lg:mx-5 md:mx-5 inline-flex items-center justify-center mt-8 text-lg sm:text-xl md:text-2xl text-white bg-btnBG px-6 py-3 rounded-full hover:bg-darkBlue transition-all duration-300"
          >
            Contact Now
            <ArrowRight className="ml-2" size={24} />
          </a>
        </div>

        {/* Hero Mega Links */}
        <section className="backdrop-blur-sm w-full lg:w-full flex flex-col lg:flex-row items-center justify-center gap-6 bg-transparent lg:bg-black lg:bg-opacity-50 lg:absolute lg:bottom-0 lg:left-0 p-6 lg:p-0  lg:h-36">
          <div className="w-full flex-1  flex justify-center bg-black lg:bg-transparent md:bg-transparent cursor-pointer bg-opacity-50 lg:w-64 py-10 rounded-lg">
            <h1 className="text-sm sm:text-base md:text-3xl lg:text-3xl font-bold text-white flex justify-center items-center gap-3">
              Our Packages <ArrowRight className="ml-2" size={24} />
            </h1>
          </div>
          <div className="w-full flex-1  flex justify-center bg-black lg:bg-transparent md:bg-transparent cursor-pointer bg-opacity-50 lg:w-64 py-10 rounded-lg">
            <h1
              className="text-sm sm:text-base md:text-3xl-
             lg:text-3xl font-bold text-white flex justify-center items-center gap-3"
            >
              Our Groups <ArrowRight className="ml-2" size={24} />
            </h1>
          </div>
          <div className="w-full flex-1  flex justify-center bg-black lg:bg-transparent md:bg-transparent cursor-pointer bg-opacity-50 lg:w-64 py-10 rounded-lg">
            <h1 className="text-sm sm:text-base md:text-3lg lg:text-3xl font-bold text-white flex justify-center items-center gap-3">
              Our Conferences <ArrowRight className="ml-2" size={24} />
            </h1>
          </div>
        </section>
      </section>
      {/* experience  */}
      <section className="h-full  px-[2%] py-[3%] lg:px-[10%] lg:py-[2%] ">
        <SectionTitle value="Experience Exceptional Service With GoDubai" />
        <div className="w-full flex flex-wrap justify-between items-stretch mx-auto h-auto">
          <InfoCard
            imgSrc={vip}
            title="Avoid a 1.5 to 2-hour wait at Dubai customs with our VIP priority service."
            description="Like celebrities, you will enjoy priority passage through Dubai customs."
          />
          <InfoCard
            imgSrc={experience2}
            title="We offer the best itineraries with renowned airlines at the best prices."
            description="No matter your budget, we provide the best flight routes with top airlines at unbeatable prices."
          />
        </div>
      </section>
      {/* events and convections */}
      <section className="h-full  px-[2%] py-[3%] lg:px-[10%] lg:py-[2%]">
        <SectionTitle
          value="Events & Conventions"
          desc="Here is the calendar of important events in Dubai & Abu Dhabi. Combine business and leisure!"
        />
        <div className="w-full flex flex-wrap justify-between items-stretch mx-auto h-auto">
          <EventCard
            imgSrc={event8}
            title={"TRAVEL CONFERENCE"}
            date={"7-8-2022"}
          />
          <EventCard imgSrc={event9} title={"GITEX GLOBAL"} date={"7-8-2022"} />
        </div>
      </section>
      {/* About Sub Section */}
      <section className="h-full lg:h-screen md:h-screen xl:h-screen  px-[2%] py-[3%] lg:px-[10%] lg:py-[2%] bg-cardsBG flex justify-center items-center">
        <div className="container flex justify-between items-center flex-wrap">
          <div className="w-full md:w-[48%] p-3 flex flex-col rounded-md gap-6">
            <h1 className="font-extrabold text-3xl text-center lg:text-start lg:text-5xl">
              About us
            </h1>
            <p className="leading-relaxed tracking-wide text-center  text-lg lg:text-start lg:text-2xl">
              A Canadian company led by women, specializing in the Emirates for
              over 10 years. Our in-depth knowledge allows us to create
              itineraries that guarantee unparalleled experiences. As a leader
              in North America, we negotiate the best rates to offer competitive
              travel prices.
            </p>
            <a
              className="flex justify-center items-center gap-4 bg-btnBG py-3 text-xl text-white rounded-full hover:bg-darkBlue transition-all duration-200 "
              href="#"
            >
              About Us <ArrowRight color="white" />
            </a>
          </div>
          <div className="w-full md:w-[48%] p-3 flex flex-col rounded-md">
            <img src={about} alt="event" className="w-full rounded-lg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
