import React from 'react'
import './App.css';
import { Col, Row, Button } from 'react-bootstrap'
import { useParams,Link } from 'react-router-dom';
import { getHotelByID } from './hoteldata';
import { getHotelData } from './hoteldata';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faWifi, faUtensils, faDumbbell, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

/* Denna komponent används för att visa detaljer för varje hotell. Detaljerna är unika för varje hotell och förändras beroende på vilket hotell som valdes i startvyn. FontAwsomeIcon importear ikonerna till populära bekvämligheter */
const HotelDetails = () => {

  const { hotelID } = useParams();
  const hotel = getHotelByID(hotelID);

    return (
      <div>
        <Link to={"/hotelcard/"}><FontAwesomeIcon icon={faArrowLeft} className="IconArrow" /> </Link>
        <Row className='m-2 p-2'>
          <Col sm='auto' className='p-2'>
            <div className='pb-2'>
            <img src={hotel.image} style={{ width: '300px' }} />
            </div>
            <div className='pt-2'>
            <div className='h3'>Populära bekvämligheter</div>
            </div>

  <div><FontAwesomeIcon icon={faWifi} className="IconWifi" /> <span>Gratis Wi-Fi</span>
            
  <FontAwesomeIcon icon={faUtensils} className="IconUtensils" /> <span>Restauranger</span></div>
             
  <div><FontAwesomeIcon icon={faDumbbell} className="IconDumbbell" /> <span>Gym</span>
              
  <FontAwesomeIcon icon={faSnowflake} className="IconSnowflake" /> <span>Luftkonditionering</span></div>

          </Col>
          <Col className='d-flex flex-column'>
            <div className='bg-white m-2 p-2'>
            <div className='h2 mb-1'>{hotel.title}</div>
            <div className='font-weight-bold text-secondary mb-1'>{hotel.subTitle}</div>
            <div className='mb-2' style={{ flex: '1 0 100px', overflow: 'hidden' }}>
              <p>{hotel.desc}</p> 
              <p><span className='boldText'>Prisinformation: </span>{hotel.price}.</p></div>
            <Link to={"/booking/" + hotel.hotelID}><Button size='md'>Boka</Button></Link>
              </div>
          </Col>
        </Row>
      </div>
    )
  }
    

export default HotelDetails;
  



