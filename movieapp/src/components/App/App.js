//why component below in {}
import React, { Component } from 'react';
import Intro from '../Intro/Index.js'
import './App.css';
import 'whatwg-fetch';

//Main app component
class App extends Component {
  state = {
    series: [] //state
  }
  componentDidMount(){
    const series = ["Black Mirror", "Rick & Morty"]; // actual array
    setTimeout(() => {
      this.setState({series}); // could do with only series inside as it should undestand you have same name
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Panchos TV series</h1>
        </header>
      <Intro message = "Aqui estan las series chingonas que le gustan a pancho" />
      The length of the series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
