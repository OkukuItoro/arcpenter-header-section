import React, { useState, useEffect } from "react";
import "./FerrisWheelStyles.scss";
import Polygon from "../Polygon/Polygon";
import { polygonPositions } from "../../constants";

const FerrisWheel = () => {
  const [animated, setAnimated] = useState(false);

  const handleClick = () => {
    setAnimated(true);

    setTimeout(() => {
      setAnimated(false);
    }, 1500);
  };
  return (
    <div className="wheel-container">
      <div className={`wheel ${animated ? "animate-wheel" : ""}`}>
        {polygonPositions.map((position, i) => (
          <Polygon key={i} onClick={handleClick} position={position} />
        ))}
      </div>
    </div>
  );
};

export default FerrisWheel;
