// Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const Navbar = ({ scrollToSection, refs  }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);


  return (
    <>
      <nav className='navbar'>
        <div className='menu-icon' onClick={handleClick}>
          {click ? (
            <IoCloseOutline style={{ color: "White" }} />
          ) : (
            <IoMenuOutline style={{ color: "White" }} />
          )}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink
              exact
              to="/"
              className='nav-links-two'
              activeClassName='nav-links_active'
              onClick={() => {
                scrollToSection(refs.invitadoRef);
                closeMobileMenu();
              }}
            >
              Inicio
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to="#"
              className='nav-links-two'
              activeClassName='nav-links_active'
              onClick={() => {
                scrollToSection(refs.CuentaRegresivaRef);
                closeMobileMenu();
              }}
            >
              Fecha
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='#'
              className='nav-links-two'
              activeClassName='nav-links_active'
              onClick={() => {
                scrollToSection(refs.fechaRef);
                closeMobileMenu();
              }}
            >
              Lugar
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to="#"
              className='nav-links-two'
              activeClassName='nav-links_active'
              onClick={() => {
                scrollToSection(refs.lugarRef);
                closeMobileMenu();
              }}
            >
              Confirmar
            </NavLink>   
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
