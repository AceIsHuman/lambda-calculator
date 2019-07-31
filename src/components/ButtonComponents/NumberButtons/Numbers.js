import React, {useState} from "react";

//import any components needed
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file
import data from "../../../data";
const numbers = data.numbers;

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div className="numbers-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      numbers.map(num => {
        return (
          <NumberButton num={num} setInput={props.setInput} />
        )
      })
      }
    </div>
  );
};

export default Numbers;