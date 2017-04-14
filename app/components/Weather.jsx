import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location)
      .then(temp => {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        })
      })
      .catch(e => {
        that.setState({
          isLoading: false,
          errorMessage: e.message
        });
      });
  },
  componentDidMount: function () {
    
    var location = this.props.location.search.replace('?location=','');

    if (location && location.length > 0) {
      this.handleSearch(location);
      //window.location = '/';
    }
  },
  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            <h1 className="text-center page-title">Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            {renderError()}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Weather;
