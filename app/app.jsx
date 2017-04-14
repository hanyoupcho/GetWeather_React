var React = require('react');
var ReactDOM = require('react-dom');
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')

// App css
require('style-loader!css-loader!sass-loader!applicationStyles')
$(document).foundation();

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={Main}/>

      <Route exact path="/" component={Weather}/>
      <Route path="/about" component={About}/>
      <Route path="/examples" component={Examples}/>
    </div>
  </Router>,
  document.getElementById('app')
);
