import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="foot-panel">
        <ul>
          <li><a>QUICK LINKS</a></li>
          <li><a href="#">about us</a></li>
          <li><a href="#">contact us</a></li>
          <li><a href="#">privacy policy</a></li>
          <li><a href="#">store locator</a></li>
        </ul>
        <ul>
          <li><a href="/"><img src="Group 3231.png" alt="11" /></a></li>
        </ul>
        <ul>
          <li><a>CONTACT INFORMATION</a></li>
          <li><a>Address</a></li>
          <li><a>Liberty Road, opp TTD Temple</a></li>
          <li><a>Himayatnagar</a></li>
          <li><a>Hyderabad</a></li>
          <li><a>Call: 9959334007</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
