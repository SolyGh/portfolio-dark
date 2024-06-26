import React from "react";
import "./hero.css";
import IMG from "../../assets/man_smoke.jpg";
import Me from "../../assets/صورة واتساب بتاريخ 2024-06-26 في 02.41.01_38c03558.jpg";

const Hero = () => {
  return (
    <div id="hero" className="section">
      <h1>
        <span>I'm</span> Ahmed Soliman
      </h1>
      <p>
        <strong> Software Engineer</strong>
      </p>
      <img src={Me} alt="" />
    </div>
  );
};

export default Hero;
