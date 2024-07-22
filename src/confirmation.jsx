import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { getHotelByID } from './hoteldata';
import { getHotelData } from './hoteldata';

/* Denna komponent är till för att visa en orderbekräftelse. Viss information här t.ex. hotellnamnet och priset varierar beroende på vilket hotell som valdes från början. */
const Confirmation = () => {

  
  const { hotelID } = useParams();
  const hotel = getHotelByID(hotelID);

  return (
    <div className="centralized bg-white text-center">
      <h2>Tack för din bokning!</h2>
      <p className="boldText">En bekräftelse skickas till 
      maria.svensson@gmail.com</p>
      <p>Du kan klicka på Till min bokning för att se detaljer samt skriva ut din bekräftelse direkt här.</p>
      <p>Du har bokat rum på {hotel.title} och betalat {hotel.price}. <br /> Ha en trevlig vistelse och resa!</p>
      <div className="centralized d-flex justify-content-between w-90"><Button size='md'>Till min bokning</Button><Button size='md'>Skriv ut</Button></div>
    </div>
  );
};

export default Confirmation;