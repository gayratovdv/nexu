import React from "react";
import "./infoCard.css";

const InfoCard = ({ data }) => {
  return (
    <div className="info">
      <div className="info__content">
        <i className={`fa-solid ${data.icon}`}></i>
        <h4>{data?.number}</h4>
        <p>{data?.paragraf}</p>
      </div>
      <div className="info__content">
        <div className="info__border"></div>
        <p>{data?.percent}%</p>
      </div>
    </div>
  );
};

export default InfoCard;
