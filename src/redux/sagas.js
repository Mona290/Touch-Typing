import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import * as actionTypes from "./actionTypes";
import { setNextKeys } from "./actions";

function* fetchNextKeysSaga() {
  try {
    const response = yield axios.get("https://api.example.com/nextKeys"); // Replace with the appropriate API endpoint
    yield put(setNextKeys(response.data.keys));
  } catch (error) {
    console.log(error);
  }
}

function* watchFetchNextKeys() {
  yield takeLatest(actionTypes.FETCH_NEXT_KEYS, fetchNextKeysSaga);
}

export default function* rootSaga() {
  yield all([watchFetchNextKeys()]);
}
