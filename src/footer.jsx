import React from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* I denna funktion finns vår footer. Den visas på alla vyer. Här finns icke-funktionella ikoner från FontAwesome samt länkar. */
function Footer() {
  return (
    <footer className="d-flex justify-content-between mt-3">
      <div classnamn="icon">
        <a href="/"><FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="/"><FontAwesomeIcon icon={faFacebook} />
      </a>
        <a href="/"><FontAwesomeIcon icon={faTwitter} />
      </a>
        
        </div>
        
      <div className="a">
        <a href ="/">Villkor</a>
        <a href="/">Kontakta oss</a>
        <a href="/">Om oss</a>
        </div>         
      
    </footer>
  );
}

export default Footer;
