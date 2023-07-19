import { Link } from "react-router-dom";
import "./Aboutcontentsty.css";
import React from 'react';
import pro4 from "../assests/pro4.avif";
import pro5 from "../assests/pro5.avif";

const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>I'm a React front-end developer. I create responsive and secure websites for my clients.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top"></div>
          <img src={pro4} className="img" alt="true" />
        </div>
        <div className="img-stack top"></div>
        <img src={pro5} className="img" alt="true" />
      </div>
    </div>
  );
};

export default Aboutcontent;
