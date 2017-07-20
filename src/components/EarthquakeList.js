import React, {Component} from 'react';
import moment from 'moment';
import earthquakes from '../data/earthquakes';


export default class EarthquakeList extends Component {
  render(){
    // const earthquakeData = earthquakes.map( function(i){
    //
    // })
    return (
      <div className="quake-list">
        <div className="row">
          {earthquakes.features.map( function(earthquake) {
            return  <div className="col-sm-6" key={earthquake.properties.ids}>
              <div className="card" >
                <div className="card-block">
                  <h4 className="card-title">{earthquake.properties.place}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquake.properties.mag}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquake.properties.tim).format('llll')}</h6>
                  <p className="card-text">Coordinates: {earthquake.geometry.coordinates}</p>

                  <a href={earthquake.properties.url} className="card-link">USGS Event Link</a>

                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }

}
