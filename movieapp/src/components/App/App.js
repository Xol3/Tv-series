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
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')//need to resolved
      .then(response => response.json()) // need to parse the results and parse the responce
      .then(json => this.setState({series: json}))
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
