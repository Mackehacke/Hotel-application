import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { getHotelByID } from './hoteldata';
import Visa from './Visa.png';
import Mastercard from './Mastercard.png';
import Maestro from './Maestro.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


/* I denna komponent sker sjävla betalningen. */
const Checkout = () => {

  /* useParams gör så att vi får tilgång till dynamiska parametrar i URL:en. Den är nödvändig vid react-router-dom v. 6. */
  const { hotelID } = useParams();

  /* Kodraden nedan gör det möjligt för oss att hämta hotelldetaljer från hotelData.jsx */
  const hotel = getHotelByID(hotelID);

  /* Div för checkout */
  return (

    <div>
    <Link to={"/booking/" + hotel.hotelID}><FontAwesomeIcon icon={faArrowLeft} className="IconArrow" /></Link>
    <div className="m-5 d-flex justify-content-center">
      <div className="hotel-details2 m-3">
      <h2>{hotel.title}</h2>
        <img src={hotel.image} alt={hotel.title} className="hotel-image" />
        <div className="bg-white mt-2 p-2">
        <h3 className="text-center">Detaljer</h3>
        <p><strong>Namn:</strong> {hotel.title}</p> <p><strong>Land:</strong> {hotel.country}</p>  <p><strong>Pris:</strong> {hotel.price}</p>
      </div>
      </div>
    <div className="container bg-white p-3">
    
      <div className="row">
        <div className="col-md-6">
          <div className="payment-form">
            <h2>Betalningsinformation</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">Kortnummer</label>
                <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="mb-3">
                <label htmlFor="cardHolder" className="form-label">Namn på kort</label>
                <input type="text" className="form-control" id="cardHolder" placeholder="Kortinnehavare" />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="expiration" className="form-label">Utgångsdatum</label>
                  <input type="text" className="form-control" id="expiration" placeholder="MM/YYYY" />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cvv" className="form-label">CVV</label>
                  <input type="text" className="form-control" id="cvv" placeholder="&#9679;&#9679;&#9679;" />
                </div>
              </div>
              <div>
                <Link to={"/confirmation/" + hotel.hotelID}><Button size='md'>Betala</Button></Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-logos">
            <img src={Visa} alt="Visa" style={{ display: "block", margin: "10px 0", width: "100px", height: "90px"}}  />
            <img src={Mastercard} alt="Mastercard"style={{ display: "block", margin: "10px 0", width: "100px", height:"60px" }}  /> 
            <img src={Maestro} alt="Maestro" style={{ display: "block", margin: "10px 0", width: "100px", height:"90px" }} />
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Checkout;

