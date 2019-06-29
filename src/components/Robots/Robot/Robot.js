import React from "react";

import "./Robot.css";

const robot = props => (
  <div className="Robot">
    <img alt="robot" src={`https://robohash.org/${props.id}`} />
    <div>
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  </div>
);

export default robot;
