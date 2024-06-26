import React from "react";
import "./Contact.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="section">
      <h2 className="contact__header">Contact Me</h2>
      <div className="contact__container">
        <div className="contact__options">
          <FaLocationArrow className="contact__icon" />
          <p> Chicago, US</p>
        </div>
        <div className="contact__options">
          <IoPersonSharp className="contact__icon" />

          <p>Phone: +00 151515</p>
        </div>
        <div className="contact__options">
          <FaLocationArrow className="contact__icon" />
          <p>Email: mail@mail.com</p>
        </div>
      </div>
      <form className="contact_form" action="">
        <p>Lets get in touch. Send me a message:</p>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />

        <input type="text" placeholder="Subject" />
        <textarea rows="10" placeholder="Message" />
        <button type="submit" className="btn btn-form">
          <FaTelegramPlane className="btn-icon" />
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Contact;
