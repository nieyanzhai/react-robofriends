import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import Robots from "../components/Robots/Robots";
import SearchBox from "../components/SearchBox/SearchBox";
import Scroll from "../hoc/Scroll/Scroll";
import * as actions from "../store/actions/index";

class App extends Component {
  componentDidMount() {
    this.props.onGetRobots();
  }

  render() {
    const filteredRobots = this.props.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    );

    let robots = <p>Loading...</p>;
    if (!this.props.isGetting) {
      robots = (
        <div className="App">
          <h1>Robot Friends</h1>
          <SearchBox
            value={this.props.searchField}
            changed={this.props.onSearchFieldChanged}
          />
          <Scroll>
            {this.props.error ? (
              this.props.error
            ) : (
              <Robots robots={filteredRobots} />
            )}
          </Scroll>
        </div>
      );
    }

    return robots;
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchBox.searchField,
    robots: state.robots.robots,
    isGetting: state.robots.isGetting,
    error: state.robots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchFieldChanged: event =>
      dispatch(actions.setSearchField(event.target.value)),
    onGetRobots: () => dispatch(actions.getRobotAsync())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
