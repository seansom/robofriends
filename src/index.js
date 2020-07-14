// to build and run live-server, use npm start command
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';

//  import UI components
import Hello from './Hello.js';
import * as serviceWorker from './serviceWorker';

// render the components inside the func
ReactDOM.render(<Hello greeting={'This is a greeting!'} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
