import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=3f69ea6e838cf76485e75ae51eddffc4';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl)
      .then(response => {
        if (response.data.count == 0) {
          throw new Error('City not found');
        } else if (response.data.cod == 200 && response.data.count > 0) {
          return response.data.list[0].main.temp;
        }
      })
      .catch(error => {
        throw new Error('City not found');
      });
  }
};
