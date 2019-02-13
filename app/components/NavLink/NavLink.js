import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';

const NavLink = ({ to, label }) => (
  <Link className="router-link" to={to}>
    {label}
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
};

export default NavLink;
