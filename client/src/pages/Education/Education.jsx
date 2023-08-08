import React from "react";
import { MdSchool } from "react-icons/md";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div className="container education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          education details
        </h2>
        <hr />

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2016 - 2020"
            iconStyle={{ background: "#138781", color: "black" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BSS</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Begum Rokeya University, Rangpur
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020 - 2022"
            iconStyle={{ background: "#138781", color: "black" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">MSS</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Begum Rokeya University, Rangpur
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
