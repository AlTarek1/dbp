import React, { useState } from "react";
import "./Standing.css";
const Standing = () => {
  const [popUp, setPopUp] = useState(1);
  const handlePopUp = () => {
    setPopUp(!popUp);
  };
  return (
    <div className="standing">
      <div className={`overlay ${popUp ? "hide" : ""}`}>
        <div className="popup">
          <div className="exit-icon" onClick={handlePopUp}>
            &times;
          </div>
          <input type="text" placeholder="Enter something..." />
          <button className="btn">Submit</button>
        </div>
      </div>
      <div className="add">
        <button className="btn" onClick={handlePopUp}>
          Add Team
        </button>
        <button className="btn" onClick={handlePopUp}>
          Add Match
        </button>
        <button className="btn" onClick={handlePopUp}>
          Add Player
        </button>
      </div>
      <div className="standings">
        <div className="row heading">
          <div className="rank">Rank</div>
          <div className="team">Team</div>
          <div className="points">Points</div>
        </div>
        <div className="row">
          <div className="rank">1</div>
          <div className="team">Team A</div>
          <div className="points">0</div>
        </div>
        <div className="row">
          <div className="rank">2</div>
          <div className="team">Team B</div>
          <div className="points">0</div>
        </div>
        <div className="row">
          <div className="rank">3</div>
          <div className="team">Team C</div>
          <div className="points">0</div>
        </div>
        <div className="row">
          <div className="rank">4</div>
          <div className="team">Team D</div>
          <div className="points">0</div>
        </div>
      </div>
    </div>
  );
};

export default Standing;
