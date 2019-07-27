import React, {useState} from "react";

//import any components needed
import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file
import data from "../../../data";
const operators = data.operators;

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div className="operators-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      operators.map(operator => {
        return(
          <OperatorButton operatorChar={operator.char} />
        )
      })
      }
    </div>
  );
};

export default Operators;