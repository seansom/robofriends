// to build and run live-server, use npm start command
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';

//  import UI components
import App from './containers/App.js'
import * as serviceWorker from './serviceWorker';

// Redux import
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';

// code to create a console logger
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots })

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


// render the components inside the func
// Provider component from redux handles passing store to components
ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
