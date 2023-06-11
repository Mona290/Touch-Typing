import * as actionTypes from "./actionTypes";

export const setNextKeys = (keys) => {
  return {
    type: actionTypes.SET_NEXT_KEYS,
    keys,
  };
};

export const setInput = (input) => {
  return {
    type: actionTypes.SET_INPUT,
    input,
  };
};

export const incrementKeysPressed = () => {
  return {
    type: actionTypes.INCREMENT_KEYS_PRESSED,
  };
};

export const setAccuracy = (accuracy) => {
  return {
    type: actionTypes.SET_ACCURACY,
    accuracy,
  };
};

