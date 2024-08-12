import React from "react";
import DescriptionBox from "./DescriptionBox";

const DescriptionGrid = ({characterDesc}) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    
  };

  const divStyle = (backgroundColor) => ({
    display: "flex",
    justifyContent: "center",
    height: "160px",
    width: "360px",
    backgroundColor,
    flexDirection: 'column'
  });

  const dottedLineStyle = {
    border: 'none',
    borderTop: '2px dotted #000', // Dotted line with 2px width and black color
    width: '100%', // Full width
    margin: '20px 0' // Margin for spacing
};

  return (
    <div style={gridStyle}>
        {Object.entries(characterDesc).map(
            ([key, value], index) => (
                <DescriptionBox descTitle={key} index={index} value={value} />
              ))}
    </div>
  );
};

export default DescriptionGrid;
