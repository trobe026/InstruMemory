import React from 'react';
import './Header.css';

const Header = props => (

  // props.bestScore = props.score

  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <ul>
          <li className='navbar-left'><a className="navbar-brand" href="/">InstruMemory</a></li>
          <li><h2>{props.message}</h2></li>
          <li className='navbar-right'><h3>Current Score: {props.score}  |  Top Score: {props.bestScore}</h3></li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Header;
