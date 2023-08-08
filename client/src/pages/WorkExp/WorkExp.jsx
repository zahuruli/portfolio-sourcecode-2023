import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiReact } from "react-icons/si";

const WorkExp = () => {
  return (
    <>
      <div className="container work" id="work">
        <div className="work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            work experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#138781", color: "white" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2019 - 2021"
              iconStyle={{ background: "#1e1e2c", color: "white" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title work-h3">
                REACT DEVELOPER
              </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#138781", color: "white" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2021 - 2023"
              iconStyle={{ background: "#1e1e2c", color: "white" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title work-h3">
                FULL STACK DEVELOPER
              </h3>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
