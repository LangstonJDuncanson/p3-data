import React from "react";
import StatDisplay from "./StatDisplay";
import DescriptionGrid from "./DescriptionGrid";

function DisplayStatProfile({ currentProfile, subName }) {
  const character = currentProfile;
  const statImageClass = `.\\images\\${character.Class}.png`;
  const imageStyle = {
    width: "512px",
    height: "512px",
  };
  const flexRow = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
  
  const flexColumn =  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
  return (
    <div style={{padding: '0 48px 0px 48px'}} >
    <div style={flexColumn}>
      <div style={flexRow}>
        <div style={flexColumn}>
          <div>
          <h1 style ={{textAlign: 'center'}}>{character.Class}</h1>
          <img src={statImageClass} style={imageStyle} />
          <h1 style ={{textAlign: 'center'}}>Abilities</h1>
          </div>
        </div>
        <div style={{padding: '0 48px 0px 48px'}}>
          <h1>Stats</h1>
          {Object.entries(character).map(
            ([key, value], index) =>
              key !== "Playstyles" && key !== "Description" && key !== "Class" &&(
                <StatDisplay statName={key} index={index} value={value} />
              )
          )}
        </div>
        <div>
        <h1>Description</h1>
        <DescriptionGrid characterDesc = {character.Description}/>
      </div>
      </div>
      
    </div>
    </div>
  );
}
export default DisplayStatProfile;
