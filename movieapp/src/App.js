//why component below in {}
import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro/Index'
//basic app component
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Panchos TV series</h1>
        </header>
      <Intro message = "Aqui estan las series chingonas" />
      </div>
    );
  }
}

export default App;
