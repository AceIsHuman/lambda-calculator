import React from "react";

const NumberButton = (props) => {
  return (
    <button style={{background: "#184379"}}>
      {props.num}
    </button>
  );
};

export default NumberButton;