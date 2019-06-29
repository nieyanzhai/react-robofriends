import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Robots from "./components/Robots/Robots";
import SearchBox from "./components/SearchBox/SearchBox";
import Scroll from "./hoc/Scroll/Scroll";

class App extends Component {
  state = {
    robots: [],
    searchField: ""
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(resp => {
        this.setState({ robots: resp.data });
      })
      .catch(err => console.log(err));
  }

  onSearchFieldChanged = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Robot Friends</h1>
        <SearchBox
          value={this.state.searchField}
          changed={this.onSearchFieldChanged}
        />
        <Scroll>
          <Robots robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
