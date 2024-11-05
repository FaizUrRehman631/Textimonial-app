import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    if (text.trim().length < 1) {
      props.showAlert("Please enter text first", "error");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("converted to UpperCase", "success");
    }
  };
  const handleLoClick = () => {
    if (text.trim().length < 1) {
      // Check if text is empty or only whitespace
      props.showAlert("Please enter text first", "error");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase", "success");
    }
  };

  const handleClearClick = () => {
    if (text.trim().length < 1) {
      // Check if text is empty or only whitespace
      props.showAlert("Please enter text first", "error");
    } else {
      let newText = "";
      setText(newText);
      props.showAlert("Text cleared", "success");
    }
  };

  const handleCopy = () => {
    if (text.trim().length < 1) {
      props.showAlert("Please enter text first", "error");
    } else {
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showAlert("copied to Clipboard!", "success");
    }
  };
  const handleExtraSpaces = () => {
    if (text.trim().length < 1) {
      props.showAlert("Please enter text first", "error");
    } else {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("extra space removed", "success");
    }
  };
  const handleOnChange = (event) => {
    console.log("handle on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading} </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
        </div>
        <div className="container ">
          <button 
            className={`btn ${
              props.mode === "light" ? "btn-primary" : "bg-gradient"
            } text-white mx-1 my-1`}
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            className={`btn ${
              props.mode === "light" ? "btn-primary" : "bg-gradient"
            } text-white mx-1 my-1`}
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            className={`btn ${
              props.mode === "light" ? "btn-primary" : "bg-gradient"
            } text-white mx-1 my-1`}
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            className={`btn ${
              props.mode === "light" ? "btn-primary" : "bg-gradient"
            } text-white mx-1 my-1`}
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            className={`btn ${
              props.mode === "light" ? "btn-primary" : "bg-gradient"
            } text-white mx-1 my-1`}
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          <b>{text.split(/\s+/).length - 1}</b> words <b>{text.length}</b>{" "}
          characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length}</b> Minutes read
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
