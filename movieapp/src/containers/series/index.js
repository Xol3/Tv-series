import React,{Component} from 'react';
import SeriesList from '../../components/SeriesList'

class Series extends Component {
  state = {
    series: [] //state
  }
// `` allows to hot manipulate url  e will get inserted
  onSeriesInputChange = e => {
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)//need to resolved
      .then(response => response.json()) // need to parse the results and parse the responce
      .then(json => this.setState({series: json}))
    console.log(e);
    console.log(e.target.value);

  }

  render(){
    return(
      <div>
      The length of the series array - {this.state.series.length}
      <div>
        <input type="text" onChange={this.onSeriesInputChange} />
      </div>
      <SeriesList list={this.state.series}/>
      </div>
    )
  }
}

export default Series;
