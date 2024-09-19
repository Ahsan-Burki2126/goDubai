import React from "react";
import { ArrowRight } from "lucide-react";
import logo from "../assets/logo.svg";
import { navItems } from "../constants/data";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-between px-[2%] py-[3%] lg:px-[10%] lg:py-[2%] bg-darkBlue h-auto">
        <div className=" py-3">
          <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl w-full tracking-widest lg:tracking-wide py-5 px-4 sm:px-10 md:px-24 lg:px-48 mx-auto text-white">
            Join our live online travel conference
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mx-auto  max-w-lg sm:max-w-none px-5">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="outline-none border-2 border-white px-4 py-3 rounded-full w-full sm:w-2/3"
            />
            <button className="flex justify-center items-center gap-2 bg-btnBG py-3 text-xl text-white rounded-full hover:bg-white hover:text-black transition-all duration-200 px-6 w-full sm:w-auto">
              Join <ArrowRight />
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full py-5">
          <img src={logo} alt="" className="mb-4 lg:mb-0" />

          <ul className="flex flex-row flex-wrap justify-around items-center gap-2 lg:gap-4 text-base lg:text-lg  overflow-x-auto">
            {navItems.map((item) => (
              <li
                key={item.Id}
                className="text-white hover:text-red-500 cursor-pointer text-center whitespace-nowrap flex-shrink-0"
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-white"
                  }
                >
                  {item.link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="flex flex-col sm:flex-row justify-between items-center  h-10 px-4 py-2">
          <p className="text-white text-center sm:text-left">
            © 2024 Ahsan Burki | All Rights Reserved
          </p>
          <a
            href="#"
            className="text-white hover:text-btnHover transition-all duration-150 cursor-pointer mt-2 sm:mt-0"
          >
            Privacy Policy
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
