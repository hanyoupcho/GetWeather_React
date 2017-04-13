var React = require('react');
import {
  NavLink as Link
} from 'react-router-dom';

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav component</h2>
        <Link exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</Link>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;
