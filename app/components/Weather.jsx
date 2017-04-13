var React = require('react')
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: "Miami",
      temp: 88
    }
  },
  handleSearch: function (location) {
    var that = this;
    openWeatherMap.getTemp(location)
      .then(function (temp) {
        that.setState({
          location: location,
          temp: temp
        })
      })
      .catch(function (error) {
        alert(error)
      });
  },
  render: function () {
    var {temp, location} = this.state;

    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    );
  }
});

module.exports = Weather;
