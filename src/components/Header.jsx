import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Headset, Menu, X, User } from "lucide-react"; // changed UserRound to User for simplicity
import { navItems } from "../constants/data";
import Headroom from "react-headroom";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Toggles mobile navigation
  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <>
      {/* Header wrapped in Headroom for sticky effect */}
      <Headroom>
        <header className="w-full bg-darkBlue px-4 lg:px-32 py-4 flex justify-between items-center z-50 relative">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-24 lg:w-32" />

          {/* Contact and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Contact Link */}
            <NavLink
              to="/contact"
              className="text-white flex items-center gap-2 hover:text-textHover"
            >
              <span className="hidden md:block">Contact Us</span>
              <Headset />
            </NavLink>

            {/* Mobile User Icon */}
            <User
              className="md:hidden hover:cursor-pointer"
              size={24}
              color="white"
            />

            {/* Mobile Menu Icon */}
            <Menu
              className="md:hidden hover:cursor-pointer"
              size={24}
              color="white"
              onClick={toggleMobileNav}
            />
          </div>

          {/* Mobile Nav Drawer */}
          {mobileNavOpen && (
            <div className="fixed inset-0 bg-darkBlue p-6 flex flex-col gap-6 z-50">
              <div className="flex justify-between items-center">
                {/* Mobile Logo */}
                <img src={logo} alt="Logo" className="w-32" />
                {/* Close Button */}
                <X
                  size={32}
                  className="text-white hover:cursor-pointer"
                  onClick={toggleMobileNav}
                />
              </div>

              {/* FR Language Link */}
              <div className="mt-4">
                <a className="text-white text-lg hover:text-red-500 cursor-pointer">
                  FR
                </a>
                <hr className="border-white mt-2" />
              </div>

              {/* Nav Items */}
              <ul className="flex flex-col gap-6 mt-4">
                {navItems.map((item) => (
                  <li key={item.id} className="text-neutral-300">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-red-500"
                          : "text-neutral-300 hover:text-red-500"
                      }
                      onClick={toggleMobileNav} // close nav on click
                    >
                      {item.link}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>
        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-between items-center w-full lg:px-32 bg-lightBlue py-3 absolute top-full left-0 z-40">
          <ul className="flex gap-6 text-lg">
            {navItems.map((item) => (
              <li key={item.id} className="text-white">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-white hover:text-red-500"
                  }
                >
                  {item.link}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* FR Language Link */}
          <a className="text-white text-lg hover:text-red-500 cursor-pointer">
            FR
          </a>
        </nav>
      </Headroom>
    </>
  );
};

export default Header;
