//Declare Redux Action Function
const addNewCalculationHistory = calculation => {
    return {
        type: 'ADD_NEW_CALCULATION_HISTORY',
        payload: calculation
    };
}

//Export the Function
export { addNewCalculationHistory };