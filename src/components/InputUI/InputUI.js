import React from "react";
import "./InputUI.css";
import "react-datepicker/dist/react-datepicker.css";

const InputUI = () => {
  return (
    <div className="search-box">
      <div className="website-headline">
        <b>Unlock Seamless City Travel with LiftPlease</b>
      </div>
      <div className="background-color-1">
        <input type="text" className="input-field" placeholder="From" />
        <div className="divider"></div>
        <input type="text" className="input-field" placeholder="To" />
        <div className="divider"></div>
        <input type="number" className="input-field" placeholder="Passengers" />
        <div className="divider"></div>
        <input type="date" className="input-field" placeholder="Select Date" />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default InputUI;
