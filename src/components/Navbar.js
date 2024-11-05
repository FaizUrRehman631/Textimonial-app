import React from "react";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
// import Welcome from "./Welcome";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Welcome">
          {props.Title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-Link active text-decoration-none ${
                  props.mode === "light" ? "text-dark" : "text-white"
                }`}
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-Link active mx-2 text-decoration-none ${
                  props.mode === "light" ? "text-dark" : "text-white"
                }`}
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-Link active text-decoration-none ${
                  props.mode === "light" ? "text-dark" : "text-white"
                }`}
                aria-current="page"
                to="/Textform"
              >
                Textform
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {/* toggle mode extra colors */}
          {/* <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              onClick={() => {
                props.toggleMode("primary");
              }}
              style={{ cursor: "pointer", height: "30px", width: "30px" }}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              onClick={() => {
                props.toggleMode("danger");
              }}
              style={{ cursor: "pointer", height: "30px", width: "30px" }}
            ></div>
            <div
              className="bg-success rounded mx-2"
              onClick={() => {
                props.toggleMode("success");
              }}
              style={{ cursor: "pointer", height: "30px", width: "30px" }}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              onClick={() => {
                props.toggleMode("warning");
              }}
              style={{ cursor: "pointer", height: "30px", width: "30px" }}
            ></div>
          </div> */}
          <div
            className={`form-check form-switch ms-4 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={() => {
                props.toggleMode(null);
              }}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
// Navbar.propTypes={
//     Title: PropTypes.string.isRequired,
//     aboutText:PropTypes.string.isRequired
// }
// Navbar.defaultProps={
//     Title :'Your title here',
//     contactText:'Contact',
//     blogText:'Blogs'

// }
