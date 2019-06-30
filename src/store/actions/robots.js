import axios from "axios";

import * as actionsType from "./actionsType";

export const getRobotsStart = () => {
  return {
    type: actionsType.GET_ROBOTS_START
  };
};

export const getRobotSuccess = data => {
  return {
    type: actionsType.GET_ROBOTS_SUCCESS,
    payload: data
  };
};

export const getRobotFail = err => {
  return {
    type: actionsType.GET_ROBOTS_FAIL,
    payload: err
  };
};

export const getRobotAsync = () => {
  return dispatch => {
    dispatch(getRobotsStart());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(resp => dispatch(getRobotSuccess(resp.data)))
      .catch(err => dispatch(getRobotFail(err.message)));
  };
};
