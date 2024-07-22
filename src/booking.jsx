import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getHotelByID } from './hoteldata';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

/* Definera komponenten */
const Booking = () => {
  const { hotelID } = useParams();
  const hotel = getHotelByID(hotelID);

  /* Statevariablerna nedan används för att kunna modifiera inputfälten och rutorna i bokningsformuläret. 
  I inputrutorna kan användaren antingen skriva in nummer eller använda knapparna för att öka eller sänka exemplevis antalet     personer. Statevariablerna gör detta möjligt.  */
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [numPeople, setNumPeople] = useState(1);
  const [numRooms, setNumRooms] = useState(1);
  const [numAdjacentRooms, setNumAdjacentRooms] = useState(0);
  const [numNights, setNumNights] = useState(1);

  /* Funktion för formulärinskickning */
  const handleSubmit = (e) => {
    e.preventDefault();

  };
 
  /* Renderar formuläret och inskickningen */
  return (
     
      <div className="flex-container">
        <Link to={"/hoteldetails/" + hotel.hotelID}><FontAwesomeIcon icon={faArrowLeft} className="IconArrow" /> </Link>
        <div className="hotel-details">
          
      <h2>{hotel.title}</h2>
          <img src={hotel.image} alt={hotel.title} className="hotel-image" />
          <div className="white-box">
          <h3 className="text-center">Detaljer</h3>
          <p><strong>Namn:</strong> {hotel.title}</p> <p><strong>Land:</strong> {hotel.country}</p>  <p><strong>Pris:</strong> {hotel.price}</p>
       </div></div>


        <div className="white-box1">
        <div className="booking-form">
        <h3>Dina uppgifter</h3>
        <form onSubmit={handleSubmit}>
          <div className="booking-input-container">
            <label>Namn:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} className="input-box"
          />
        </div>
          <div className="booking-input-container">
          <label>Adress:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)} className="input-box"
          />
        </div>
          <div className="booking-input-container">
          <label>E-post:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} className="input-box"
          />
        </div>
          <div className="booking-input-container">
            <h3>Rumsuppgifter</h3>
            
              <div className="number-input-container">
          <label>Antal personer:</label>
          <input
            type="number"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)} style={{ width: '30px' }} className="input-box1"
          />
        </div></div>
          <div className="booking-input-container"> 
              <div className="number-input-container">
          <label>Antal rum:</label>
          <input
            type="number"
            value={numRooms}
            onChange={(e) => setNumRooms(e.target.value)} style={{ width: '30px' }} className="input-box2"
          />
        </div></div>
          <div className="booking-input-container">         
              <div className="number-input-container">
          <label>Antal angränsande rum:</label>
          <input
            type="number"
            value={numAdjacentRooms}
            onChange={(e) => setNumAdjacentRooms(e.target.value)} style={{ width: '30px' }} 
          />
        </div></div>
          <div className="booking-input-container">
              <div className="number-input-container">
          <label>Antal nätter:</label>
          <input
            type="number"
            value={numNights}
            onChange={(e) => setNumNights(e.target.value)} style={{ width: '30px' }} className="input-box3"
          />
        </div> </div>
      </form>
      </div>
    </div>

        <div className="white-box2">
          <form>
            <h3>Betalningsalternativ</h3>
            <div className="booking-input-container">         
                  <div className="number-input-container">
              <label>Betala direkt:</label>
              <input
                type="checkbox"
                style={{ width: '30px' }} 
              />
            </div></div>
            <div className="booking-input-container">         
                  <div className="number-input-container">
              <label>Faktura:</label>
              <input
                type="checkbox"
                style={{ width: '30px' }} 
              />
            </div></div>
            <div className="booking-input-container">         
                  <div className="number-input-container">
              <label>Betala på plats:</label>
              <input
                type="checkbox"
                style={{ width: '30px' }} 
              />
            </div></div>
          </form>
          <div className="mt-5">
           <Link to={"/checkout/" + hotel.hotelID}><Button size='md'>Boka</Button></Link>
          </div>
        </div>
    </div>

    
  );
};

export default Booking;

