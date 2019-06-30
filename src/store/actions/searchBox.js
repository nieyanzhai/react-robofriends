import * as actionsType from "./actionsType";

export const setSearchField = text => {
  return {
    type: actionsType.SET_SEARCH_FIELD,
    payload: text
  };
};
