import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div id="navbar">
        <div className="logo">
          <img src="" alt="1" />
        </div>
        <div className="icons">
          <input type="text" placeholder="Search" id="search" />
          <a href="/">About us</a>
          <a href="/">Shop</a>
          <a href="/"><img src="prefix__D_Header_Profile_Icon_3.png" alt="2" /></a>
          <a href="/"><img src="prefix__g4906.png" alt="3" /></a>
          <a href="/"><img src="prefix__D_Header_Cart_Icon_4.png" alt="4" /></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
