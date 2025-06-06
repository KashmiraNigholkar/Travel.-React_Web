import React, { useState } from "react";
import "./navbar.scss"; // Use only SCSS or CSS, not both
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { MdOutlineTravelExplore } from "react-icons/md";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const showNav = () => setIsActive(true);
  const hideNav = () => setIsActive(false);

  return (
    <section className="navbarSection">
      <header className="header flex">
        {/* Logo */}
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" /> Travel.
            </h1>
          </a>
        </div>

        {/* Navbar Links */}
        <div className={`navBar ${isActive ? "activeNavbar" : ""}`}>
          <ul className="navLists flex">
            {["Home", "Packages", "Shop", "About", "Pages", "News", "Contact"].map((item, index) => (
              <li className="navItem" key={index}>
                <a href="#" className="navLink">{item}</a>
              </li>
            ))}

            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          {/* Close Icon */}
          <div onClick={hideNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        {/* Toggle Icon */}
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
