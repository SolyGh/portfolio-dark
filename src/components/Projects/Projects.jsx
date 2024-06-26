import React from "react";
import IMG1 from "../../assets/wedding.jpg";
import IMG2 from "../../assets/underwater.jpg";
import IMG3 from "../../assets/sailboat.jpg";
import IMG4 from "../../assets/rocks.jpg";
import IMG5 from "../../assets/p6.jpg";
import IMG6 from "../../assets/wedding.jpg";
import IMG7 from "../../assets/chef.jpg";
import "./projects.css";
const Projects = () => {
  return (
    <div id="projects" className="section">
      <h2 className="projects_header">My Recent Work</h2>

      <div className="projects_container">
        <img src={IMG1} alt="" />
        <img src={IMG2} alt="" />
        <img src={IMG3} alt="" />
        <img src={IMG4} alt="" />
        <img src={IMG5} alt="" />
        <img src={IMG6} alt="" />
        <img src={IMG7} alt="" />
      </div>
    </div>
  );
};

export default Projects;
