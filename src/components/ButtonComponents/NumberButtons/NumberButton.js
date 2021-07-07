import React from "react";

const NumberButton = (props) => {
  return (
    <button style={{background: "#184379"}} onClick={() => props.setInput(props.num)}>
      {props.num}
    </button>
  );
};

export default NumberButton;