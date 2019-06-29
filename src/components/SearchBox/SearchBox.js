import React from "react";

import "./SearchBox.css";

const searchBox = props => {
  return (
    <input
      className="SearchBox"
      type="search"
      placeholder="search"
      value={props.value}
      onChange={props.changed}
    />
  );
};

export default searchBox;
