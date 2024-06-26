import React from "react";
import "./nav.css";
 import { FaHome } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import Me from "../../assets/wts.jpg"
const Navbar = () => {
  return (
    <nav id="nav">
      <div>
        <img
          className="nav_img"
          src={Me}
          style={{ width: "100px", height: "130px" }}
          alt=""
        />
      </div>
      <div className="nav_el">
        <FaHome className="nav_icon" />
        Home
        {/*  */}
      </div>
      <div className="nav_el">
        <MdOutlineContactSupport className="nav_icon" />
        About
      </div>
      <div className="nav_el">
        <FaRegEye className="nav_icon" />
        Projects
      </div>
      <div className="nav_el">
        <IoMail className="nav_icon" />
        Contact
      </div>
    </nav>
  );
};

export default Navbar;
