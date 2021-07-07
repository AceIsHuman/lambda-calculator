import React from "react";

const OperatorButton = (props) => {
  return (
    <button style={{background: "#247293"}}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.operatorChar}
    </button>
  );
};

export default OperatorButton;