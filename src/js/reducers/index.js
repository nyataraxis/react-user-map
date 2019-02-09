import * as ActionTypes from "../constants/action-types";

const initialState = {
  users: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.USERS_LOADED:
      return {
        ...state,
        users: action.payload.features
      };
    default:
      return state;
      break;
  }
}
export default rootReducer;
