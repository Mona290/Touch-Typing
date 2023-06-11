import React, { useState } from "react";

const TypingBox = ({ nextKeys, handleInput }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);
    handleInput(userInput);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="Start typing..."
    />
  );
};

export default TypingBox;
