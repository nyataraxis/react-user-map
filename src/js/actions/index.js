import * as ActionTypes from "../constants/action-types";

export function getUsers() {
  return { type: ActionTypes.USERS_REQUESTED };
}
