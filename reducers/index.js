import { ADD_DECK } from "../actions";
import { setInitialData } from "../utils/api";

function decks(state = setInitialData(), action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
        },
      };
    default:
      return state;
  }
}

export default decks;
