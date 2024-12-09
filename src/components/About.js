import React from "react";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpeg";
import image6 from "./images/image6.png";
import image8 from "./images/image8.jpg";

export default function About(props) {
  return (
    <>
      <div
        className="container mb-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="my-3">About Us</h2>
        <p>
          <strong>TextEase</strong> is a ReactJs website built primarily to do
          various operations on regular typed text. You can safely use WordPad
          or NotePad for text drafting, and saving, but TextEase offers much
          more than simple text drafting and formatting. TextEase can convert
          your text to any case in just one simple click of a button. It can
          extract links and numbers safely from a labyrinth of random text or
          sophisticated documentation. It has an improved property of base64
          encoding, reversal of your inputted text.You can even remove
          whitespaces from your scripted documents, and wear up your earphones
          to listen to it, instead of straining your eyes! It does a detailed
          analyzing of your text, and provides an output of words, and
          characters, along with reading time as well. The best part of TextEase
          is that it is an open source project, as a result, dozens of new
          features are in the upcoming, which definitely makes it a cut above
          the rest. The most eminent features of the website are as follows :
        </p>
        <div className="accordion" id="accordionExample">
          <div
            className="accordion-item"
            style={{
              backgroundColor: props.mode === "light" ? "aquamarine" : "grey",
              color: props.mode === "dark" ? "aquamarine" : "black",
            }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button "
                type="button"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "grey",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>ANALYZE YOUR TEXT</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Analyze your text</strong> is a handy tool on TextEase
                that checks your content for quality and readability. It
                highlights grammar issues, spelling errors, and enhances
                clarity. This tool can also help you optimize keywords for SEO.
                Simply paste your text to get instant feedback and suggestions.
                Perfect for bloggers, writers, and content creators aiming for
                polished, professional writing.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{
              backgroundColor: props.mode === "light" ? "aquamarine" : "grey",
              color: props.mode === "dark" ? "aquamarine" : "black",
            }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "grey",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>FREE TO USE</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Free to use</strong> TextEase is a free, it is completely
                free to use. No credit cards required. Use as much as you want!!
                User-friendly tool designed to help you with all your text
                processing needs. It offers a variety of tools to format,
                analyze, and manipulate text quickly and easily. You can remove
                extra spaces, count characters, or convert text to different
                cases effortlessly. With TextEase, you’ll save time on routine
                text tasks. Perfect for students, writers, and professionals
                alike!
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{
              backgroundColor: props.mode === "light" ? "aquamarine" : "grey",
              color: props.mode === "dark" ? "aquamarine" : "black",
            }}
          >
            <h2 className="accordion-header ">
              <button
                className="accordion-button collapsed"
                type="button"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "grey",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>BROWSER COMPATIBLE</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Browser compatiblility</strong> TextEase is fully
                compatible with all major web browsers, ensuring smooth
                functionality across Chrome, Firefox, Safari, and Edge. Our
                tools load fast and work reliably on desktop and mobile, making
                your text editing seamless wherever you are. We prioritize
                cross-browser compatibility to enhance user experience. Enjoy
                the same powerful features on any device or browser you prefer.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="carouselExample"
        className="carousel slide container d-flex justifyContent-center text-center mb-5 alignItem-center"
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
          <div className="carousel-item">
            <img src={image6} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image8} className="d-block w-100" alt="..." />
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
