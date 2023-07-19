import React from 'react';
import { Link } from 'react-router-dom';
import IntroImg from "../assests/tree-736885_1280.jpg"

import './HeroImgsty.css';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER.</p>
        <h1>React Developer</h1>
        <div className="button-container">
          <Link to="/project" className="btn">Projects</Link>
        </div>
        <div className="button-container">
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
