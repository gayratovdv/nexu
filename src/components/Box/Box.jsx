import React from "react";
import "./box.css";

const Box = (props) => {
  return (
    <div className="box">
      <div className="box__content">
        <i>{props?.courses?.icon}</i>
        <div>
          <div className="box__content--wrapper">
            <h5>{props?.courses?.name}</h5>
            <p>{props?.courses?.duration}</p>
          </div>
          <p className="box__content--wrapper-subtitle">{props?.courses?.category}</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
