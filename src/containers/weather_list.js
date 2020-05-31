import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";
import "../styles/weather.css";

class WeatherList extends Component {

  renderWeather(cityData) {
    debugger;
    if(cityData){
      const name = cityData.city.name;
      const temps = cityData.list.map(weather => weather.main.temp);
      const humidities = cityData.list.map(weather => weather.main.humidity);
      const { lon, lat } = cityData.city.coord;

      return (
        <tr key={name}>
          <td><GoogleMap lon={lon} lat={lat} /></td>
          <td><Chart data={temps} color="orange" units="K" /></td>
          <td><Chart data={humidities} color="black" units="%" /></td>
        </tr>
      );
    }
    else{
      return
    }
  }

  render() {
    debugger;
    if(this.props.weather.length !== 0){
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      );
    } else {
      return []
    }
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
