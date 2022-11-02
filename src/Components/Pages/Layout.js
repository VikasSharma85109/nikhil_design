import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../Header'
import Footer from '../Footer'
import Home from './Home';
import MyListings from './MyAccount/MyListings';
import AccountInfo from './MyAccount/AccountInfo';
import Notifications from './MyAccount/Notifications';
import MyBidsWins from './MyAccount/MyBidsWins';
import HowShibnobiMotorWorks from './HowShibnobiMotorWorks';
import PhotoGallery from './PhotoGallery';
import SubmitaVehicle from './SubmitaVehicle';

function Layout() {
  return (
    <>
        <Header/>
          <BrowserRouter>
            <Routes>
            <Route index element={<Home />} />
                <Route path="listing" element={<MyListings />} />
                <Route path="notification" element={<Notifications />} />
                <Route path="biding" element={<MyBidsWins />} />
                <Route path="works" element={<HowShibnobiMotorWorks />} />
                <Route path="account" element={<AccountInfo />} />
                <Route path="gallary" element={<PhotoGallery />} />
                <Route path="submit" element={<SubmitaVehicle />} />
            </Routes>
          </BrowserRouter>
          {/* <AccountInfo/> */}
          {/* <Notifications/> */}
          {/* <MyListings/> */}
          {/* <MyBidsWins/> */}
          {/* <HowShibnobiMotorWorks/> */}
          {/* <PhotoGallery/> */}
          {/* <Home/> */}
          <SubmitaVehicle/>
        <Footer/>
    </>


    // <div>
    //     <Header/>
    //     <Home/>
    //     <Footer/>
    // </div>
  )
}

export default Layout