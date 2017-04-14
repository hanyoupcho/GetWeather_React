var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, "app"), "node_modules"],
    alias: {
      //Views
      Main: 'components/Main.jsx',
      Nav: 'components/Nav.jsx',
      Weather: 'components/Weather.jsx',
      WeatherForm: 'components/WeatherForm.jsx',
      WeatherMessage: 'components/WeatherMessage.jsx',
      About: 'components/About.jsx',
      Examples: 'components/Examples.jsx',
      //Modals
      ErrorModal: 'components/ErrorModal.jsx',
      //Server APIs
      openWeatherMap: 'api/openWeatherMap.jsx',
      //Styles
      applicationStyles: 'styles/app.scss'
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
  },
  devtool: 'cheap-module-eval-source-map'
};
