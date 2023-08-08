import React from "react";
import "./Techstack.css";
import Pulse from "react-reveal/Pulse";
import { TechStackList } from "../../utils/TechStackList";
const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technologies Stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          {" "}
          👉 including programming languages, frameworks, database,front-end &
          back-end tools, & APIs{" "}
        </p>
      </div>

      <div className="row">
        {TechStackList.map((tech) => (
          <div className="col-md-3" key={tech._id}>
            <Pulse>
              <div className="card m-2 stack-card">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon size={25} />
                      </div>
                      <div className="media-body">
                        <h6 className="m-2">{tech.name}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Pulse>
          </div>
        ))}
      </div>
    </>
  );
};

export default Techstack;
