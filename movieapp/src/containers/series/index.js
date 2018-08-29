import React,{Component} from 'react';
import SeriesList from '../../components/SeriesList'

class Series extends Component {
  state = {
    series: [], //state
    seriesName:'',
    ifFetching: false
  }
// `` allows to hot manipulate url  e will get inserted
  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true}) //allows us to see  the e target value
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)//need to resolved
      .then(response => response.json()) // need to parse the results and parse the responce
      .then(json => this.setState({series: json, isFetching: false}))
    console.log(e);
    console.log(e.target.value);

  }

  render(){
    const{ series, seriesName, isFetching} = this.state;

    return(
      <div>
      <div>
        <input
        value={seriesName}
        type="text"
        onChange={this.onSeriesInputChange} />
      </div>
      {
        series.length === 0 && seriesName.trim() === ''
        &&
        <p>Orale Carnalito. Buscale en la cajita. </p>
      }
      {
        series.length === 0 && seriesName.trim() !== ''
        &&
        <p>Nel pastel, no encontre nada</p>
      }
      <SeriesList list={this.state.series}/>
      </div>
    )
  }
}

export default Series;
