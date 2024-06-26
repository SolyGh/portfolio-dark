import React from "react";
import "./testimonials.css";
import I1 from "../../assets/bandmember.jpg";
import I2 from "../../assets/avatar_g2.jpg";
const Testimonials = () => {
  return (
    <div id="testimonials" className="section">
      <h2 className="testimonials_header">My Reputation</h2>
      <div className="card">
        <img className="card-img" src={I1} alt="" />
        <div className="card-text">
          <h3>Chris Fox. CEO at CEO </h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="card">
        <img className="card-img" src={I2} alt="" />

        <div className="card-text">
          <h3>Chris Fox. CEO at CEO </h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
