import React from "react";

const Results = ({ numKeysPressed, accuracy }) => {
  return (
    <div>
      <p>Number of keys pressed: {numKeysPressed}</p>
      <p>Accuracy: {accuracy}%</p>
    </div>
  );
};

export default Results;
