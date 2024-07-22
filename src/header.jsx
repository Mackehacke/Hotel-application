import React from 'react';
import logo from './logo.png';


/* I denna komponent finns vår header. Den visas på alla vyer. Här finns företagets logotyp samt icke-funktionella länkar. */
const Header = () => {
  return (
    <header className="mb-3">
      <nav>
        <ul>
          <li><a href="/">Hem</a></li>
          <li><a href="/">Våra Hotell</a></li>
          <li><a href="/">Favoriter</a></li>
          <li><a href="/">Konto</a></li>
        </ul>
      </nav>
      <img src={logo} alt="Logga" />
    </header>
    
  );
};

export default Header;





