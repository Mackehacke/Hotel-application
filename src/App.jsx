import React, { ReactDOM } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HotelCard from './hotelcard';
import HotelDetails from './hoteldetails';
import Header from './header';
import Footer from './footer';
import hotelData from './hoteldata';
import Booking from './booking';
import Checkout from './checkout';
import Confirmation from './confirmation';

/* För att definera huvudkomponten */
const App = () => {
  return (
    
    <div className="App">
      <Header />
       <Routes>
         <Route path="/hotelcard" >
           <Route index element={<HotelCard />} />
           <Route path=":country" element={<HotelCard />} />
          </Route>
          <Route path="/hoteldetails/:hotelID" element={<HotelDetails />} />
          <Route path="/booking/:hotelID" element={<Booking />} />
          <Route path="/checkout/:hotelID" element={<Checkout />} />
          <Route path="/confirmation/:hotelID" element={<Confirmation />} />
          <Route
          path="*"
          element={<Navigate to="/hotelcard" replace />} />
        </Routes>
      <Footer />
    </div>
  );
}

/* Exportera för vidaranvädning */
export default App;

