import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TypingBox from "./components/TypingBox";
import KeyDisplay from "./components/KeyDisplay";
import Results from "./components/Results";


import {
  setNextKeys,
  setInput,
  incrementKeysPressed,
  setAccuracy,
} from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const nextKeys = useSelector((state) => state.nextKeys);
  const input = useSelector((state) => state.input);
  const numKeysPressed = useSelector((state) => state.numKeysPressed);
  const accuracy = useSelector((state) => state.accuracy);

  useEffect(() => {
    dispatch(setNextKeys(generateRandomKeys()));
  }, [dispatch]);

  const handleInput = (userInput) => {
    dispatch(setInput(userInput));

    if (userInput === nextKeys) {
      dispatch(incrementKeysPressed());
      dispatch(setNextKeys(generateRandomKeys()));
      dispatch(setInput(""));
    }

    const inputLength = userInput.length;
    const correctInput = nextKeys.substring(0, inputLength);
    const currentAccuracy = (correctInput.length / inputLength) * 100;
    dispatch(setAccuracy(currentAccuracy.toFixed(2)));
  };

  const generateRandomKeys = () => {
    const keys = "asdfjkl;";
    let randomKeys = "";

    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * keys.length);
      randomKeys += keys.charAt(randomIndex);
    }

    return randomKeys;
  };

  return (
    <div>
      <h1>Touch Typing Application</h1>
      <KeyDisplay nextKeys={nextKeys} />
      <TypingBox nextKeys={nextKeys} handleInput={handleInput} />
      <Results numKeysPressed={numKeysPressed} accuracy={accuracy} />
    </div>
  );
};

export default App;
