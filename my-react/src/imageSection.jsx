import React from "react";

const ImageSection = () => {
  return (
    <div className="image-container">
      <img
        src="https://www.twire.se/wp-content/uploads/2019/06/Twire-38-of-141.jpg"
        alt="Twire Office"
        className="background-image"
      />
      <div className="overlay">
        <h2>We create strategies, <br />innovation & growth.</h2>
        <p>
        <span>Twire is a consultancy firm focused on strategic IT and software</span>
                <span>development connecting top expertise with clients worldwide.</span>
                <span>Over more than a decade, we have collected a huge experience within IT</span>
                <span>and now help our clients build their outsourcing solutions, high</span>
                <span>performance distributed teams, strategic IT solutions as well as</span>
                <span>privacy programs and data protection. Twire uses a customised and</span>
                <span>unique qualification process to gather and offer only the best</span>
                <span>developers and services available. Twire is based in Colombo, Sri</span>
                <span>Lanka, with Swedish founders, global customers and top-notch talent.</span>
                <span>talent.</span>
        </p>
      </div>
    </div>
  );
};

export default ImageSection;
