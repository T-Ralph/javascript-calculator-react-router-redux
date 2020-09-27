//Import React and ReactDOM, createSTore and Provider from Redux, Router and Route from React-Router
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Import CSS Styles
import './index.css';

//Import Components
import ReactLogo from './components/ReactLogo';
import Nav from './components/Nav';
import Home from './components/Home';
import CalculatorTitle from './components/CalculatorTitle';
import CalculatorForm from './components/CalculatorForm';
import CalculatorExpression from './components/CalculatorExpression';
import CalculationsHistory from './components/CalculationsHistory';

//Import Redux Actions and Reducers
import CalculationsHistoryReducer from './reducers/CalculationsHistoryReducer';

//Create Redux store
const store = createStore(
  CalculationsHistoryReducer,
  //Add Argument to enable Redux DevTools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Render Dom
ReactDOM.render(
  <Provider store={store}>
    <ReactLogo />
    <Router>
      <Nav />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/input">
        <CalculatorTitle name="Input" />
        <CalculatorForm />
      </Route>
      <Route path="/expression">
        <CalculatorTitle name="Expression" />
        <CalculatorExpression />
      </Route>
      <Route path="/history">
        <CalculationsHistory />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);