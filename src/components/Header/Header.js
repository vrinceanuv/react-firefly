import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';

export const Header = (props) => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{props.title}</h2>
    </div>
  )
}
