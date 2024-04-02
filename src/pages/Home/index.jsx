import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Img from "./img.jpg";
const HomePage = () => {
  const [value, setValue] = useState();

  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div>
      <h1 className="heading">Connect with Customers</h1>
      <div className="img_div">
        <img src={Img} alt="Anj " />
      </div>

      <div className="input">
        <input
          className="change"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter your name"
        />
      </div>

      <div className="event">
        <button className="button button1" onClick={handleJoinRoom}>
          Join
        </button>
      </div>
    </div>
  );
};
export default HomePage;
