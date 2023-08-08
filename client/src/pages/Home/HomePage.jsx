import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import resume from "../../assets/docs/my-cv.pdf";
import { useTheme } from "../../context/ThemeContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const HomePage = () => {
  const [theme, setTheme] = useTheme();

  //handle theme:
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={27} />
          ) : (
            <BsFillSunFill size={27} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi ✋ I'm a </h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Fullstack Web Developer!",
                    "Mern Stack Developer!",
                    "React Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade left>
            <div className="home-buttons">
              <a
                className="btn btn-hire "
                href="https://api.whatsapp.com/send?phone=01710815467"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className=" btn btn-cv" href={resume} download={"Zahurul CV"}>
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default HomePage;
