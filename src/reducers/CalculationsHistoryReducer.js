//Import uuid for Unique Identification
import { v4 as uuidv4 } from 'uuid';

//Define Redux Reducer Function
const CalculationsHistoryReducer = ( state = [], action ) => {
  //Switch to Handle Action Type
  switch ( action.type ) {
    case 'ADD_NEW_CALCULATION_HISTORY':
      const newCalculationHistory = {
        id: uuidv4(),
        calculation: action.payload
      };
      const newCalculationHistoryList = [...state]; //Create a COPY of the original state array
      newCalculationHistoryList.push( newCalculationHistory ); // Add the new task to the new array
      return newCalculationHistoryList; //Return the updated state
    default:
      return state;
  }
}

//Export the Function
export default CalculationsHistoryReducer;