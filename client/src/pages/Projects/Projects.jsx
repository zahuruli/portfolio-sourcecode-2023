import React from "react";
import "./Projects.css";
import Jump from "react-reveal/Jump";

const Projects = () => {
  return (
    <>
      <div className="container projects" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          {" "}
          👉 Here are my top 3 projects with live links & source code{" "}
        </p>
        {/* ===============card design =========================*/}
        <div className="row " id="ads">
          {/* =========ecommerce app ==========*/}

          <div className="col-md-4">
            <Jump>
              <div className="card rounded ads-card">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img src="./image/ecommerce.PNG" alt="Project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase text-center">
                      Ecommerce App
                    </h6>
                  </div>
                  <a
                    href="https://mernstack-ecommerce-app.onrender.com/"
                    className="ad-btn"
                    target="blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </Jump>
          </div>
          {/*=========== Restaurant=============== */}
          <div className="col-md-4">
            <Jump>
              <div className="card rounded ads-card">
                <div className="card-image">
                  <span className="card-notify-badge">React</span>
                  <img src="./image/restaurant.PNG" alt="Project2" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">MUI</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">React</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase text-center">
                      Restaurant Website
                    </h6>
                  </div>
                  <a
                    href="https://64ceaa25d144566abdf6215e--velvety-liger-93e5e0.netlify.app/"
                    target="blank"
                    className="ad-btn"
                  >
                    View
                  </a>
                </div>
              </div>
            </Jump>
          </div>
          {/*================ chat-GPT ===================*/}
          <div className="col-md-4">
            <Jump>
              <div className="card rounded ads-card">
                <div className="card-image">
                  <span className="card-notify-badge">Chat-GPT</span>
                  <img src="./image/chat-gpt.PNG" alt="Project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase text-center">
                      Chat-GPT Clone
                    </h6>
                  </div>
                  <a href="#" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </Jump>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
