import React from "react";
import "./About.css";
import photoPerfil from '../../media/photoPerfil.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>About Me</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur aliquid consequuntur, officia ipsum soluta. Architecto nesciunt, deleniti illo obcaecati ullam mollitia accusamus provident commodi distinctio quam excepturi tempore illum.</p>
      </div>
      <div className="about-img">
        <img src={photoPerfil} alt="img not found " />
      </div>
    </div>
  );
};

export default About;
