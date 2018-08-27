//importing the react syntax from the react lybrary
import React from 'react';
//clarifying that it willmodify the react DOM structure
import ReactDOM from 'react-dom';
//importing the css styling from the index .css
import './index.css';
//importing the main app component
import App from './App';
//let the app load faster on subsequent buisness and production
import registerServiceWorker from './registerServiceWorker';
//takes three arguments first the react elements in this case app the second DOM contaainer in wich we want to render ourreact element in this case the App element
//the third one is the registerServiceWorker you can store logic you want

// here we are creating a react element called greeting


//jsx suports javascrip

//creating a simple date function to return the current date
let getCurrentDate = () => {

let date = new Date();
return date.toDateString();
}

let greeting = <h1>Hello World! Current date: {getCurrentDate()}</h1>//1st is a tag you want to use 2nd;props you want to provide to your element in this case an empty object

ReactDOM.render(greeting, document.getElementById('root'));
registerServiceWorker();
