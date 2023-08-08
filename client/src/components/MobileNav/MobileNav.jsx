import React, { useState } from "react";
import "./MobileNav.css";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import Fade from "react-reveal/Fade";

import {
  FcAbout,
  FcBiotech,
  FcContacts,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  //handle open:
  const handleOpen = () => {
    setOpen(!open);
  };

  //handle menu click:
  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <AiOutlineMenuFold
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}
          <span className="mobile-nav-title">ZAHURUL ISLAM</span>
        </div>
        {open && (
          <Fade left>
            <div className="mobile-nav-menu">
              <div className="nav-items">
                <div className="nav-item">
                  <div className="nav-link">
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
                    >
                      <FcHome /> Home
                    </Link>
                  </div>
                  <div className="nav-link">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
                    >
                      <FcAbout /> About
                    </Link>
                  </div>
                  <div className="nav-link">
                    <Link
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
                    >
                      <FcReadingEbook /> Education
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link
                      to="techstack"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
                    >
                      {" "}
                      <FcBiotech /> Tech Stack
                    </Link>
                  </div>
                  <div className="nav-link">
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
                    >
                      {" "}
                      <FcVideoProjector /> Projects
                    </Link>
                  </div>
                  <div className="nav-link">
                    <Link
                      to="work"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
                    >
                      {" "}
                      <FcPortraitMode /> Works
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
                    >
                      {" "}
                      <FcContacts /> Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        )}
      </div>
    </>
  );
};

export default MobileNav;
