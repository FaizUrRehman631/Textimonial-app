import React, {useState} from "react";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";



export default function Navbar(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
    <nav
      className={`navbar navbar-expand-lg sticky-top navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
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
                TextTransform
              </Link>
            </li>
          </ul>
          <form
        action="https://www.google.com/search"
        method="GET"
        target="_blank"
        className="d-flex"
      >
        {/* Input field for the search query */}
        <input
          type="text"
          name="q" // This is the parameter Google uses for its search
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control me-2"
          placeholder="Search Google"
        />
        {/* Submit button */}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!searchQuery.trim()} // Disable if the query is empty
        >
          Search
        </button>
      </form>
          <div
            className={`form-check form-switch mx-2 text-${
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
              DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
    <div className=" my-2">
        <marquee
          behavior="scroll"
          bgcolor="grey"
          height="30px"
          direction="left"
           style={{color: "white", width: "100%", margin: "0 auto"}}
        >
          Change TextEase is a handy web application that enables you to change
          the text case of any given text. Simply copy and paste the text into
          the text area below and click the required text case.
        </marquee>
      </div>
    </>
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
