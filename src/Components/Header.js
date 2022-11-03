import React, { useState } from "react";
import shibnobiMotors from "../Assets/images/shibnobiMotors.png";
import LoginModal from "./Popups/LoginModal";
import RegisterModal from "./Popups/RegisterModal";
import SearchModal from "./Popups/SearchModal";
// import {Link} from 'react-router-dom'

function Header() {
  const [login, setLogin] = useState(true);

  return (
    <div>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-md">
                <a className="navbar-brand" href="index.html">
                  <img src={shibnobiMotors} alt="shibnobiMotors" />
                </a>
                <button
                  className="navbar-toggler navbar-toggler-right collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navb"
                >
                  <span className="navbarToggler"></span>
                </button>

                <div className="collapse navbar-collapse" id="navb">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      {/* <a className="nav-link" to="/auction">
                        Auctions
                      </a> */}
                      <div class="dropdown">
                          <a class="nav-link " href="#h">Auctions</a>
                          <div class="dropdown-content">
                            <a className="nav-link" href="#1">Live now</a>
                            <a className="nav-link" href="#2">Premium</a>
                            <a className="nav-link" href="#2">Resullt</a>
                          </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/submit">
                        Submit a Vehicle
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/works">
                        How Shibnobi Works
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="javascript:void(0)"
                        data-toggle="modal"
                        data-target="#loginModal"
                      >
                        Log In
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/listing">
                        <i className="fa-solid fa-star"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="javascript:void(0)"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </a>
                    </li>
                  </ul>
                  <ul className="navbar-nav mobileOnly">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Shipping
                      </a>
                     
                   
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Makes and Models
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Categories
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Get Alerts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Charity Auctions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Shibnobi Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Event Calendar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Carraffle
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About Shibnobi
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Gear Store
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-12 mobileOnlyHide">
              <nav className="navbar navbar-expand secondNavbar">
                <div className="container-fluid">
                  <div
                    className="collapse navbar-collapse "
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav flex-wrap" id="nav">
                      <li className="nav-item">
                        {/* <a className="nav-link" href="#">
                          Shipping
                        </a> */}
                        <div class="dropdown">
                          <a class="nav-link " href="#h">Shipping</a>
                          <div class="dropdown-content">
                            <a className="nav-link" href="#1">Get a quote</a>
                            <a className="nav-link" href="#2">My Shipment</a>
                          </div>
                      </div>

                      </li>
                      <li className="nav-item">
                       
                        <div class="dropdown">
                          <a class="nav-link " href="#h">Makes and Models</a>
                          <div class="dropdown-content">
                            <a className="nav-link" href="#1">Company</a>
                            <a className="nav-link" href="#2">Showroom</a>
                          </div>
                      </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Categories
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Get Alerts
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Charity Auctions
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Shibnobi Features
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Event Calendar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Podcast
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          About Shibnobi
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                         Shibnobi Store
                        </a>
                      </li>

                      <li className="nav-item dropdown d-none">
                        <a
                          className="nav-link"
                          href="#"
                          id="navbarDropdownMenu"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="navbarToggler"></span>
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-right secondNavDropdown"
                          aria-labelledby="navbarDropdownMenu"
                        ></ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

       <LoginModal /> 
       <RegisterModal />  
       <SearchModal/>
    </div>
  );
}

export default Header;
