import React, { Component } from 'react';
import './NotFound.css';
import {NavLink} from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="NotFound">
          <h1>404</h1>
          <p>This page has not been found</p>
          <ul>
            <li><NavLink exact activeClassName="active" to="/">Go back to the main page</NavLink></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NotFound;
