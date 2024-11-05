import React from 'react';

export default function Welcome(props) {
  return (
    <>
      <div
        className="container p-4 text-center mb-4"
        style={{
          backgroundColor: props.mode === "light" ? "#90EE90" : "#E6E6FA",
          color: props.mode === "dark" ? "green" : "white",
        }}
      >
        <h2>Welcome to Textimonial</h2>
      </div>
      <div className="container">
        <h2>The Beauty of Nature!</h2>
        <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt="Norway" style={{ width: "100%" }} />
        <div className="text-block my-4">
          <h4>Morning Sight</h4>
          <p>What a beautiful sunrise</p>
        </div>
      </div>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
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
    </>
  );
}
