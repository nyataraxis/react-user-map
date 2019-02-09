import { takeEvery, call, put } from "redux-saga/effects";
import * as ActionTypes from "../constants/action-types";

export default function* watcherSaga() {
  yield takeEvery(ActionTypes.USERS_REQUESTED, workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getUsers);
    yield put({ type: ActionTypes.USERS_LOADED, payload });
  } catch (e) {
    yield put({ type: ActionTypes.API_ERRORED, payload: e });
  }
}

function getUsers() {
    return fetch("http://localhost:3000/features").then(response =>
      response.json()
    );
  }