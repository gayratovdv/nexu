import React from "react";
import "./error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="wrapper">
      <h1 className="title">Oops</h1>
      <h2>404 - PAGE NOT FOUND</h2>
      <p className="subtitle">
        The page you are looking for might have been removed <br />   had its name
        changed or is temporarily unavailable
      </p>
      <button className="error-btn"><Link to="/">GO TO HOME PAGE</Link></button>
    </div>
  );
};

export default Error;
