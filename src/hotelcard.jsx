import React from "react";
import { Card, Button, Row, Col } from 'react-bootstrap';
import { getHotel } from './hoteldata';
import { Link, useParams } from 'react-router-dom';
import SearchBar from './searchbar';

/* Denna komponent visar varje hotell i ett kort. Här har vi använt Bootstrap Card för det ändamålet. */
function HotelCard() {

  /*  */
 let { country } = useParams();
  console.log(country);
  var hotelCountry= country || "";


  
  /* Koden nedan hämtar all data från vår objektarray-lista i hoteldata.jsx */
  const hotelArray = getHotel(hotelCountry);
  console.log(hotelArray);

  return (
    <div>
      <h1 className="text-center pt-4 display-1">Hitta din drömresa nu!</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SearchBar />
      </div>    
      <div className="p-3">
      <Row>
        {
          /* Här används map för att skapa en loop för att visa hotellen. */
          hotelArray.map((hotel) => (
            <Col md="4" sm="4" xl="4" className="p-3" key={hotel.hotelID}>
              {/* Varje hotell visas i ett kort. */}
              <Card>
                <Card.Img style={{ height: '400px' }} src={hotel.image} />
                <Card.Body>
                  <div style={{ height: '100px' }}>
                    <Card.Title>{hotel.title}</Card.Title>
                    <Card.Subtitle className="text-muted text-wrap mb-2">
                      {hotel.subTitle}
                    </Card.Subtitle>
                  </div>
                  {/* .substring(0,100) gör att bara de första 100 karaktererna i hotel.desc visas i hotellkorten. */}
                  <Card.Text className="book-desc" style={{ color: 'gray' }}>
                    {hotel.desc.substring(0, 100)}... 
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Link to={"/hoteldetails/" + hotel.hotelID}><Button size='md'>Läs mer</Button></Link>
                    {/* Link gör så att knappen kan länka till hoteldetails-komponenten. + hotel.hotelID behöver vara med 
                    för annars vet inte komponenten vilket hotell som ska visas. */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </div>
  </div>
  );
  
}

export default HotelCard;