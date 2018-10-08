import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-light fixed-top">
    <ul className="nav">
      <li className="nav-item">
        <Link to='/' className='nav-link'>Home</Link>
      </li>
      <li className="nav-item">
        <Link to='/List' className='nav-link'>List</Link>
      </li>
    </ul>
  </nav>
)

export default Navbar;