import React from "react";
import "./style.css";

const Title = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      <h1>Score: {props.score} Highscore: {props.highscore}</h1>
    </div>
  </div>
);

export default Title;
