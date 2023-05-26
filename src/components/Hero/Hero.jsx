import React from "react";
import "./HeroStyles.scss";
import FerrisWheel from "../FerrisWheel/FerrisWheel";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <div className="hero__left--heading-box">
          <h1 className="text-heading__main">
            Home of
            <span className="text-heading__sub">
              <span className="text-heading__highlighted">Premium</span>{" "}
              Interiors
            </span>
            & Designs
          </h1>
        </div>
        <div className="hero__left--description-box">
          <p className="text-description">
            Catering to both local and international brands. Aimade offers
            creative design solutions tailored to the brand's personal style and
            needs. From colour schemes to furniture placement, we'll help you
            transform your space into a comfortable and aesthetically pleasing
            environment.
          </p>
        </div>
        <div className="hero__left--btns">
          <button className="button">Book Appointment</button>
          <button className="button btn-white">Schedule A Demo</button>
        </div>
      </div>
      <div className="hero__right">
        <FerrisWheel />
      </div>
    </div>
  );
};

export default Hero;
