import React from "react";

export default function About(props) {
  return (
    <div
      className="container mb-5"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h2 className="my-3">About Us</h2>
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
              <strong>Analyze your text</strong> is a handy tool on Textutils that checks your content for quality and readability. It highlights grammar issues, spelling errors, and enhances clarity. This tool can also help you optimize keywords for SEO. Simply paste your text to get instant feedback and suggestions. Perfect for bloggers, writers, and content creators aiming for polished, professional writing.
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
              <strong>Free to use</strong> Textutils is a free, user-friendly tool designed to help you with all your text processing needs. It offers a variety of tools to format, analyze, and manipulate text quickly and easily. You can remove extra spaces, count characters, or convert text to different cases effortlessly. With Textutils, you’ll save time on routine text tasks. Perfect for students, writers, and professionals alike!
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
              <strong>Browser compatiblility</strong> Textutils is fully compatible with all major web browsers, ensuring smooth functionality across Chrome, Firefox, Safari, and Edge. Our tools load fast and work reliably on desktop and mobile, making your text editing seamless wherever you are. We prioritize cross-browser compatibility to enhance user experience. Enjoy the same powerful features on any device or browser you prefer.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
