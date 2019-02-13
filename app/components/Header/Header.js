import React from 'react';
import { Link } from 'react-router-dom';
// import Banner from './images/banner.jpg';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <h1>
          Digital Aristotle Project
        </h1>
      </div>
    );
  }
}

export default Header;
