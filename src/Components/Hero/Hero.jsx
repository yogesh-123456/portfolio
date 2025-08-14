import React from "react";
import "./Hero.css";
import profile_img from "../../assets/myprofile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="profile" src={profile_img} alt="" />
      <h1>
        {" "}
        <span>I'm Yogesh Kamunkar,</span> The MERN Stack Devloper
      </h1>
      <p>
        I'm a passionate and self-driven Computer Science student with hands-on
        experience in full-stack web development using the MERN stack.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
