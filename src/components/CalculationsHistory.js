//Import React, React-Redux
import React from 'react';
import { connect } from 'react-redux';

//Declare the Function
const CalculationsHistory = (props) => {

    //Create New Array to Reverse Order of store
    const newCalculationsHistory = [...props.calculationsHistoryData];
    newCalculationsHistory.reverse();

    //Compile List
    const listItems = newCalculationsHistory.map( (history) => <li key={history.id}>{history.calculation}</li> );

    return (
        <>
            <h1>Calculations History</h1>
            <section>
                <ul>{listItems}</ul>
            </section>
        </>
    );
}

//Export the Function with Redux store in 'props' using 'connect'
export default connect( state => { return { calculationsHistoryData: state } } )( CalculationsHistory );