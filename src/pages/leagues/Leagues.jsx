import React from "react";
import { useNavigate } from "react-router-dom";

const Leagues = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/standing");
  };
  return (
    <div className="center">
      <ul>
        <li onClick={handleOnClick}>League1</li>
        <li onClick={handleOnClick}>League1</li>
        <li onClick={handleOnClick}>League1</li>
        <li onClick={handleOnClick}>League1</li>
      </ul>
    </div>
  );
};

export default Leagues;
