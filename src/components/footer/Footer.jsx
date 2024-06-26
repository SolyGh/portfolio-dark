import React from "react";
import "./footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaSnapchatGhost } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__icons">
        {" "}
        <img src="" alt="" />
        <AiFillInstagram className="icon" />
        <FaSnapchatGhost className="icon" />
        <TfiLinkedin className="icon" />
        <FaPinterestP className="icon" />
        <FaTwitter className="icon" />
        <RiFacebookFill className="icon" />
      </div>
      <p>Powered by Ahmed Soliman</p>
    </footer>
  );
};

export default Footer;
