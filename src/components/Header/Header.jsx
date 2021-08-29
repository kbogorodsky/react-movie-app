import React, { Component } from 'react';
import Login from './Login';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a href="1#" className="nav-link">
                Home
              </a>
            </li>
          </ul>
          <Login />
        </div>
      </nav>
    );
  }
}
export default Header;
