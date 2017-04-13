var path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, "app"), "node_modules"],
    alias: {
      Main: 'components/Main.jsx',
      Nav: 'components/Nav.jsx',
      Weather: 'components/Weather.jsx',
      WeatherForm: 'components/WeatherForm.jsx',
      WeatherMessage: 'components/WeatherMessage.jsx',
      About: 'components/About.jsx',
      Examples: 'components/Examples.jsx',
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
