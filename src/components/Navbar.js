import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className='collapse navbar-collapse d-flex justify-content-between' id='navbarTogglerDemo01'>
          <div className='d-flex mx-5'>
            <Link className='navbar-brand' to='/'>
              {props.title}
            </Link>
            <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  {props.aboutText}
                </Link>
              </li>
            </ul>
          </div>
          <div className='d-flex mx-5'>
            <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' style={{ backgroundColor: props.mode === "dark" ? "gray" : "white" }} />
            <button className='btn btn-outline-success my-2 mx-1 my-sm-0' type='submit'>
              Search
            </button>
            <div className={`form-check mt-2 mx-3 mx-1 form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <input onClick={props.toggleMode} className='form-check-input' type='checkbox' id='flexSwitchCheckDefault' />
              <label className='form-check-label' htmlFor='flexSwitchCheckDefault'>
                {props.mode === "dark" ? "Dark" : "Light"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here ",
  aboutText: "Set about text here",
};
