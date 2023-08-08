import React, { useState } from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";
import toast from "react-hot-toast";
import axios from "axios";

import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit button:
  const haldleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
      }
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/portfolio/sendEmail`,
        { name, email, msg }
      );
      //
      if (data.success) {
        toast.success(data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="container contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 ">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="./image/contact.jpg"
                    alt="contact"
                    className="cnt-image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <Fade right>
                <div className="card2 d-flex card border-0 px-3 py-3">
                  <div className="row">
                    <div className="row">
                      {" "}
                      <h6>
                        Contact With
                        <a
                          href="https://www.linkedin.com/in/zahurul-joy-9799a91aa/"
                          target="_blank"
                        >
                          {" "}
                          <BsLinkedin color="blue" size={28} className="ms-2" />
                        </a>
                        <a href="https://github.com/zahuruli" target="_blank">
                          {" "}
                          <BsGithub color="black" size={28} className="ms-2" />
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=100052026428405"
                          target="_blank"
                        >
                          {" "}
                          <BsFacebook color="blue" size={28} className="ms-2" />
                        </a>
                      </h6>
                    </div>
                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>

                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        id=""
                        cols="30"
                        rows="5"
                        placeholder="Write Your Message Here..."
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={haldleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
