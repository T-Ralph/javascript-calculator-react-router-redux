//Import React
import React from 'react';

//Declare the Function
const CalculatorTitle = props => {
    return (
        <h1>
          React Calculator by {props.name}
        </h1>
    );
}

//Export the Function
export default CalculatorTitle;