//importing the react syntax from the react lybrary
import React from 'react';
//clarifying that it willmodify the react DOM structure
import ReactDOM from 'react-dom';
//importing the css styling from the index .css
import './index.css';
//importing the main app component
import App from '/home/javi/Documents/freeCodeCamp/Tv-series/movieapp/src/components/App/App.js';
//let the app load faster on subsequent buisness and production
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
