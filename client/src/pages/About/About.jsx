import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row ">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img ">
            <img src="./image/zahurul.png" alt="" />
          </div>
          <div className="col-md-6 about-content">
            <h1>About me</h1>
            <p>
              This is Md. Zahurul Islam a Full Stack Web Developer with ability
              to self learn and collaborate in rapidly changing environments and
              compositions. Worked through MERN Stack, learning JavaScript,
              Node.Js, React.Js, and Mongodb. Eager to tackle web
              development/design challenges to achieve lasting impacts on user
              experience.I am a creative web developer with a strong background
              in Javascript & committed to delivering visually stunning and
              userfriendly websites by leveraging my expertise in coding and
              design principles.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
