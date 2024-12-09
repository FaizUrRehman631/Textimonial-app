import React from "react";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpeg";

export default function Welcome(props) {
  return (
    <>
      <div
        className="container p-4 text-center mb-5"
        style={{
          backgroundColor: props.mode === "light" ? "brown" : "#E6E6FA",
          color: props.mode === "dark" ? "green" : "white",
        }}
      >
        <h2>Welcome to TextEase</h2>
      </div>
      <div
        id="carouselExample"
        className="carousel slide container mb-4 d-flex justifyContent-center text-center alignItem-center"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item ">
            <img src={image2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image5} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        className="container text-center my-5"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "grey",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>The Beauty of Nature!</h2>
        <img
          src="https://www.w3schools.com/howto/img_nature_wide.jpg"
          alt="Norway"
          style={{ width: "100%" }}
        />
        <div className="text-block my-4">
          <h4>Morning Sight</h4>
          <p>What a beautiful sunrise</p>
        </div>
      </div>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p>
          &copy; {new Date().getFullYear()} Shadow Walker. All Rights Reserved.
        </p>
        <p>
          <a
            href="#"
            className="text-white text-decoration-none"
            style={{ fontWeight: "bold" }}
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="#"
            className="text-white text-decoration-none"
            style={{ fontWeight: "bold" }}
          >
            Terms of Service
          </a>
        </p>
      </footer>
    </>
  );
}
