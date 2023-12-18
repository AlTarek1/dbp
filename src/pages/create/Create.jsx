import React from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/standing");
  };

  return (
    <div className="center  ">
      <input type="text" placeholder="Enter League Name" />
      <button className="btn" onClick={handleOnClick}>
        Create
      </button>
    </div>
  );
};

export default Create;
