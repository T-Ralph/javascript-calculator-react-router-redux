//Import React and useState, React-Redux, Action addNewCalculationHistory
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewCalculationHistory } from '../actions/CalculationsHistoryAction';

//Declare the Component Function
const CalculatorForm = (props) => {

    //Declare Constants for useStates
    const [firstNumber, setFirstNumber] = useState("0");
    const [operation, setOperation] = useState("+");
    const [secondNumber, setSecondNumber] = useState("0");
    const [result, setResult] = useState("0");
    const [resultDisplay, setResultDisplay] = useState(false);

    //Declare the CalculateResult Function
    const CalculateResult = event => {
        event.preventDefault(); //Prevent Refresh

        let tempResult = 0; //Create TempResult

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

    //Check if result should be displayed
    let resultDisplayDiv = "";
    if (resultDisplay) {
        resultDisplayDiv = <div id="result">{result.toString()}</div>;
    }

    return (
        <>
            <form onSubmit={CalculateResult}>
                <label htmlFor="firstNumber">First Number</label>
                <input type="number" id="firstNumber" placeholder="Number" required onChange={e => { setFirstNumber( e.target.value ); }} value={firstNumber} />
                <label htmlFor="operation">Operation</label>
                <select id="operation" required onChange={e => { setOperation( e.target.value ); }} value={operation} >
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                </select>
                <label htmlFor="secondNumber">Second Number</label>
                <input type="number" id="secondNumber" placeholder="Number" required onChange={e => { setSecondNumber( e.target.value ); }} value={secondNumber} />
                <input type="submit" value="Calculate" />
            </form>
            {resultDisplayDiv}
        </>
    );
}

//Export the Function with Redux store in 'props' using 'connect'
export default connect( state => { return { calculationsHistoryData: state } } )( CalculatorForm );