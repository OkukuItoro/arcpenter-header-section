import React, { useState, useEffect } from "react";
import "./FerrisWheelStyles.scss";
// import Polygon from "../Polygon/Polygon";
import { imgPositions } from "../../constants";

const FerrisWheel = () => {
  const [init, setInit] = useState(false);
  const [initAngle, setInitAngle] = useState(0);
  const [wheelAngle, setWheelAngle] = useState(0);

  const handleClick = () => {
    setInitAngle(wheelAngle + 10);
    setWheelAngle((prevAngle) => prevAngle - 90);

    setInit(true);
    setTimeout(() => {
      setInit(false);
    }, 400);
  };

  return (
    <div className="wheel-container">
      <div
        style={{
          transform: `rotate(${init ? initAngle : wheelAngle}deg) scale(2.3) `,
          transition: "all  1s ease-out",
        }}
        className="wheel"
      >
        {imgPositions.map((position, i) => (
          <img
            key={i}
            src={position.img}
            style={{
              top: `${position.top}rem`,
              left: `${position.left}rem`,
              height: `${position.height}px`,
              width: `${position.width}px`,
            }}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default FerrisWheel;
