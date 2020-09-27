//Import React and useState, React-Redux, Action addNewCalculationHistory
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewCalculationHistory } from '../actions/CalculationsHistoryAction';

//Declare the Component Function
const CalculatorExpression = (props) => {

    //Declare Constants for useStates
    const [expression, setExpression] = useState("1+1");
    const [result, setResult] = useState("0");
    const [resultDisplay, setResultDisplay] = useState(false);

    //Declare the CalculateResult Function
    const CalculateResult = event => {
        event.preventDefault(); //Prevent Refresh

        //Split Expression
        const splitExpression = expression.split(/\+|-|\*|\//);

        //Check for Complex Expressions
        if (splitExpression.length !== 2) {
            alert("Complex or Invalid Mathematical Expression!");
        }
        else {

            //Declare the Constants
            const firstNumber = splitExpression[0];
            const secondNumber = splitExpression[1];
            let operation = "";
            let tempResult = 0
            if (expression.includes("+")) {
                operation = "+";
            }
            else if (expression.includes("-")) {
                operation = "-";
            }
            else if (expression.includes("*")) {
                operation = "*";
            }
            else if (expression.includes("/")) {
                operation = "/";
            }
            else {
                operation = "";
            }

            //Hide the Result DIV
            setResultDisplay(false);

            //Check for Invalid Inputs
            if (isNaN(firstNumber) || isNaN(secondNumber)) {
                alert("Invalid Input!");
            }
            else {
                //Switch for Operation
                switch (operation) {
                    case "+":
                        tempResult = Number(firstNumber) + Number(secondNumber);
                        break;
                    case "-":
                        tempResult = Number(firstNumber) - Number(secondNumber);
                        break;
                    case "*":
                        tempResult = Number(firstNumber) * Number(secondNumber);
                        break;
                    case "/":
                        tempResult = Number(firstNumber) / Number(secondNumber);
                        break;
                    default:
                        tempResult = 0;
                        alert("Invalid Operation!");
                        break;
                }

                //Set the New Result to State
                setResult(tempResult);

                //Show the Result DIV
                setResultDisplay(true);

                //Add the calculation to Redux store
                props.dispatch(addNewCalculationHistory(`${firstNumber} ${operation} ${secondNumber} = ${tempResult}`));
            }

        }
    }

    //Check if result should be displayed
    let resultDisplayDiv = "";
    if (resultDisplay) {
        resultDisplayDiv = <div id="resultExpression">{result.toString()}</div>;
    }

    return (
        <>
            <form onSubmit={CalculateResult}>
                <label htmlFor="expression">Expression</label>
                <input type="text" id="expression" placeholder="Simple Mathematical Expression like '1+1'" required onChange={e => { setExpression( e.target.value ); }} value={expression} />
                <input type="submit" value="Calculate" />
            </form>
            {resultDisplayDiv}
        </>
    );
}

//Export the Function with Redux store in 'props' using 'connect'
export default connect( state => { return { calculationsHistoryData: state } } )( CalculatorExpression );