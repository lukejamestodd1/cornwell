import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
      return (
        <header className="Header">
          <p>
            <span className="divider"></span>ABOUT US<span className="divider"></span>
          </p>
        </header>
      );
    }
  }
  
  export default Header;