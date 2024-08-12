import React, { useEffect, useState } from "react";

function StatDisplay({ statName, value, index }) {
  const statImage = `.\\images\\${statName}.png`;
  const statImageClass = `.\\images\\${value}.png`;

  const imageStyle = {
    width: "32px",
    height: "32px",
  };
  const rectangle = {
    width: `${value * 24}px`,
    height: "24px",
    background: backgroundStatColorizer(value),
  };
  return (
    <div className="flex-row stat-container">
      {statName === "Class" ? (
        <img src={statImageClass} style={imageStyle} />
      ) : (
        <img src={statImage} style={imageStyle} />
      )}
      <p key={index} className="stat-text">{`${statName}: ${value}`}</p>
      <div style={rectangle}></div>
    </div>
  );
}

function backgroundStatColorizer(stat) {
  let backgroundColor;

  switch (true) {
    case stat >= 1 && stat <= 4:
      backgroundColor = "#f94144";
      break;
    case stat >= 5 && stat <= 8:
      backgroundColor = "#f8961e";
      break;
    case stat >= 9 && stat <= 12:
      backgroundColor = "#f9c74f";
      break;
    case stat >= 13 && stat <= 16:
      backgroundColor = "#90be6d";
      break;
    default:
      backgroundColor = "gray"; // Default color if stat is out of range
  }
  return backgroundColor;
}
export default StatDisplay;
