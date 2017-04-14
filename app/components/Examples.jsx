import React from 'react';
import {NavLink as Link} from 'react-router-dom';

var Examples = (props) => {
  return (
    <div className="text-center page-title">
      <h1>Examples component</h1>
      <p>Here are a few example location to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
