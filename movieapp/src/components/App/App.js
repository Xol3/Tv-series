//why component below in {}
import React, { Component } from 'react';
import Intro from '../Intro/Index.js';
import Series from '../../containers/series/index.js'
import './App.css';
import 'whatwg-fetch';

//Main app component
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Panchos TV series</h1>
        </header>
      <Intro message = "Aqui estan las series chingonas que le gustan a pancho" />
      <Series />
      </div>
    );
  }
}

export default App;
