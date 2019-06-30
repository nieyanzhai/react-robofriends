import * as actionsType from "../actions/actionsType";

const initialState = {
  searchField: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.SET_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
