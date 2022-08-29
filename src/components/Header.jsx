import React from "react";
import logo from "./images/logo.png";

const Header = () => {
  return (
    <div className="container">
      <ul className="nav d-flex align-items-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="100px" alt="vibras"/></a>
        </li>
        <li className="nav-item">
          <a class="nav-link link_header" href="#">Juguetes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Esenciales</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Eroteca</a>
        </li>
      </ul>
    </div>
  )
}

export default Header;