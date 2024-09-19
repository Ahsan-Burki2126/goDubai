import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Headset, Menu, X, UserRound } from "lucide-react";
import { navItems } from "../constants/data";
import Headroom from "react-headroom";
const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  function toggleMobileNav() {
    setMobileNav(!mobileNav);
  }

  return (
    <>
      {/* Header section with logo and contact */}
      <Headroom>
        <header className="w-full bg-darkBlue px-8 lg:px-32 md:px-32 py-4 flex justify-between items-center">
          <img src={logo} alt="Logo" />
          <div className="flex justify-center items-center gap-4">
            <NavLink
              to="/contact"
              className="text-white flex justify-center items-center gap-2 hover:text-textHover"
            >
              <span className="hidden lg:inline-block md:inline-block">
                Contact Us
              </span>{" "}
              <Headset />
            </NavLink>
            <UserRound
              className="inline-block lg:hidden md:hidden hover:cursor-pointer"
              size={24}
              color="white"
            />
            {/* Menu button for mobile */}
            <Menu
              className="inline-block lg:hidden md:hidden hover:cursor-pointer"
              size={24}
              color="white"
              onClick={toggleMobileNav}
            />
          </div>

          {/* Mobile nav drawer */}
          {mobileNav && (
            <>
              <div className="fixed top-0 right-0 w-full h-screen lg:hidden bg-darkBlue p-6 flex flex-col gap-6 shadow-lg z-50 transition-transform duration-300">
                <div className="flex justify-between items-center">
                  <img src={logo} alt="Logo" className="w-32" />
                  {/* Close button for mobile nav */}
                  <X
                    size={32}
                    className="text-white hover:cursor-pointer"
                    onClick={toggleMobileNav}
                  />
                </div>

                {/* "FR" Link */}
                <div className="mt-4">
                  <a
                    to="/"
                    className="text-white text-lg hover:text-red-500 cursor-pointer"
                  >
                    FR
                  </a>
                  <hr className="border-white mt-2" />
                </div>

                {/* Nav items */}
                <ul className="flex flex-col items-start gap-6 mt-4">
                  {navItems.map((item) => (
                    <li
                      key={item.Id}
                      className="text-neutral-300 hover:text-red-500 cursor-pointer text-xl"
                      onClick={toggleMobileNav}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive ? "text-red-500" : "text-neutral-300"
                        }
                      >
                        {item.link}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </header>

        {/* Desktop nav */}
        <nav className="w-full hidden md:flex lg:flex justify-between items-center px-32 bg-lightBlue py-3">
          <ul className="flex justify-around items-center gap-6 text-[1.2rem]">
            {navItems.map((item) => (
              <li
                key={item.Id}
                className="text-white hover:text-red-500 cursor-pointer"
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
          <a className="text-white text-[1.4rem] hover:text-red-500 cursor-pointer">
            FR
          </a>
        </nav>
      </Headroom>
    </>
  );
};

export default Header;
