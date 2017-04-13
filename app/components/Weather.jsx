var React = require('react')
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

var Weather = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm/>
        <WeatherMessage/>
      </div>
    );
  }
});

module.exports = Weather;
