import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <i>{props?.data?.icon}</i>
      <h3>{props?.data?.title}</h3>
      <p>{props?.data?.subtitle}</p>
    </div>
  );
};

export default Card;
