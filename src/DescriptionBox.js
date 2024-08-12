import React from "react";

function DescriptionBox({descTitle, value}) {
    const divStyle = (backgroundColor) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "240px",
        width: "540px",
        backgroundColor,
        flexDirection: 'column'
      });
      const getColorForHeading = (heading) => {
        switch (heading) {
          case "The Great":
            return "green";
          case "The Good":
            return "lightgreen";
          case "The Bad":
            return "lightcoral";
          case "The Ugly":
            return "red";
          case "The Question":
            return "lightblue";
          case "The Wonderful":
            return "lightyellow";
          default:
            return "white"; // Default color if none match
        }
      };
      const outlinedTextStyle =  {
        color: 'white', /* Internal color */
        textShadow: `
          -1px -1px 0 #000,  
           1px -1px 0 #000,
          -1px  1px 0 #000,
           1px  1px 0 #000,  /* Outline with 4 shadows */
           2px  2px 5px rgba(0, 0, 0, 0.5) /* Drop shadow */
        `
      };
      const pStyle = {
        fontWeight: "bold",
        padding: "0px 24px 0px 24px",
        color: "black",
        textAlign: 'center'
      };
      
    return (
<div style={divStyle(getColorForHeading(descTitle))}>
          <h2 style={outlinedTextStyle}>{descTitle}</h2>
          <p style={pStyle}>{value}</p>
        </div>
    );
}

export default DescriptionBox;