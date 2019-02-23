import React, { Component } from 'react';
 

class Header extends Component {
  render() {
    return (
    
 <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">Flights</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
 
 
    );
  }
}

export default Header;
