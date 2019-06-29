import React from "react";

import Robot from "./Robot/Robot";
import "./Robots.css";

const robots = props => {
  const robots = props.robots.map(robot => (
    <Robot key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
  ));

  return <div className="Robots">{robots}</div>;
};

export default robots;
