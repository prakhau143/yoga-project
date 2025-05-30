import React from "react";
/* import name from "../assets/images/name.png";
 */ import gif1 from "../assets/images/gif1.png";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="col1">
          <h1>Practice</h1>
          <h2>Yoga Studio</h2>
          <p>Burlington, VT</p>
        </div>
        <div className="col2">
          <img src={gif1} alt="yoga" className="img" />
          <div className="ball"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
