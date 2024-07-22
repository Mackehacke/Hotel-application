import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormControl } from "react-bootstrap";
import HotelCard from './hotelcard';
import updateInput from './hotelcard';
import { Link } from "react-router-dom";



function refreshPage() {
  location.replace(location.href)
}

/* I dennna komponent finns vår sökfunktion. */
export default function SearchBar() {


  const [searchPhrase, setSearchPhrase] = useState("");
  return (
    <div className="d-flex" >
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        value={searchPhrase}
        onChange={(e) => setSearchPhrase(e.target.value)}
      />
      <Link to={"/hotelcard/" + searchPhrase}><Button variant="outline-success">Search</Button></Link>

    </div>

  );
}