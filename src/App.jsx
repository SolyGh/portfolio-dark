import React from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Price from "./components/prices/Price";
import Testimonials from "./components/testimonials/Testimonials";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./global.css";
import Nav from "./components/nav/Nav";
const App = () => {
  return (
    <div className="app_container">
      {" "}
      <Nav />
      <div className="app_content">
        <Hero />
        <About />
        <Price />
        <Testimonials />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
