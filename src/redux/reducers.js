import * as actionTypes from "./actionTypes";

const initialState = {
  nextKeys: "asdfjkl;",
  input: "",
  numKeysPressed: 0,
  accuracy: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NEXT_KEYS:
      return {
        ...state,
        nextKeys: action.keys,
      };
    case actionTypes.SET_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case actionTypes.INCREMENT_KEYS_PRESSED:
        return {
            ...state,
            numKeysPressed: state.numKeysPressed + 1,
          };
        case actionTypes.SET_ACCURACY:
          return {
            ...state,
            accuracy: action.accuracy,
          };
        default:
          return state;
      }
    };
    
    export default reducer;
    