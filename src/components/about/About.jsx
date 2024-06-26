import React from "react";
import "./about.css";
const About = () => {
  return (
    <div id="about" className="section">
      <h2 className="about_header">My Name</h2>
      <p>
        Some text about me. Some text about me. I am lorem ipsum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <h3 className="skills">My Skills</h3>
      <div className="skills_p">
        <p>Photography</p>
        <div className="white">
          <div className="grey" style={{ width: "90%", height: "28px" }}></div>
        </div>
        <p>Web Design</p>
        <div className="white">
          <div className="grey" style={{ width: "95%", height: "28px" }}></div>
        </div>
        <p>Marketing</p>
        <div className="white">
          <div className="grey" style={{ width: "80%", height: "28px" }}></div>
        </div>
      </div>

      <div className="about__whiteboard">
        <span className="board_1">
          <b>11+</b>
           
          Partners
        </span>
        <span className=" board_2 ">
          <b>55+</b>  
          Projects Done
        </span>
        <span className="board_3">
          <b>250+</b>  
          Happy Clients
        </span>
        <span className="board_4">
          <b>150+</b> 
          Meetings
        </span>
      </div>
      <button className="btn-cv btn">Download Resume</button>
    </div>
  );
};

export default About;
