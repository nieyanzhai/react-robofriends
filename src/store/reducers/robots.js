import * as actionsType from "../actions/actionsType";

const initialState = {
  robots: [],
  isGetting: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.GET_ROBOTS_START:
      return {
        ...state,
        isGetting: true
      };
    case actionsType.GET_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: action.payload,
        isGetting: false
      };
    case actionsType.GET_ROBOTS_FAIL:
      return {
        ...state,
        isGetting: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
