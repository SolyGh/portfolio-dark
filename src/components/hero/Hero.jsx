import React from "react";
import "./hero.css";
import Me from "../../assets/wts.jpg";

const Hero = () => {
  return (
    <div id="hero" className="section">
      <h1>
        <span>I'm</span> Ahmed Solyman
      </h1>
      <p>
        <strong> Software Engineer</strong>
      </p>
      <img src={Me} alt="" />
    </div>
  );
};

export default Hero;
