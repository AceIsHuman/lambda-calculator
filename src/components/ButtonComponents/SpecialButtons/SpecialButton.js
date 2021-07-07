import React from "react";

const SpecialButton = (props) => {
  return (
    <button style={{backgroundColor: "#225d9e"}}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.special
      }
    </button>
  );
};

export default SpecialButton;