import React from "react";

function DisplayStatProfile({ currentProfile, subName }) {
  const character = currentProfile;
  return (
    <div className="flex-column">
      <div>
        <h1>{character.Class}</h1>
      </div>
      <div className="flex-row">
        <div>
          <div>
            <img src=".\logo192.png" />
          </div>
          <div>
            <h2>Description</h2>
          </div>
        </div>
        <div>
          <h2>Stats</h2>
          <p>Class: {subName} {character.Class}</p>
          <p>HP: {character.HP}</p>
          <p>AP: {character.AP}</p>
          <p>ATK: {character.ATK}</p>
          <p>DEF: {character.DEF}</p>
          <p>MAG: {character.MAG}</p>
          <p>WIS: {character.WIS}</p>
          <p>SPD: {character.SPD}</p>
          <p>LUK: {character.LUK}</p>
        </div>
      </div>
    </div>
  );
}
export default DisplayStatProfile;
