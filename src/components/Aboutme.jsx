import React from "react";
import about from "../assets/images/about/about.png";

function Aboutme() {
  return (
    <div className="about-container">
      <img src={about} alt="about" className="about-image" />
      <div className="rectangle1"></div>
      <div className="rectangle2"></div>
      <section>
        <h2>About Practice Yoga Studio</h2>
        <p>
          Welcome to Practice Yoga Studio, located in the heart of Burlington, VT. 
          We are dedicated to providing a peaceful and nurturing environment for your yoga journey. 
          Our studio offers a variety of classes suitable for all levels, from beginners to advanced practitioners.
          Join our community and discover the transformative power of yoga in a supportive and welcoming atmosphere.
        </p>
      </section>
    </div>
  );
}

export default Aboutme;
