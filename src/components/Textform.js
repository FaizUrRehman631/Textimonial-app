import React, { useState } from "react";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  // Initialize SpeechRecognition API
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  // SpeechRecognition settings
  recognition.continuous = true; // Listen continuously
  recognition.interimResults = true; // Show partial results
  recognition.lang = "en-US"; // Set language

  // Toggle listening functionality
  const handleToggleListening = () => {
    if (!isListening) {
      // Start Listening
      setIsListening(true);
      recognition.start();

      recognition.onresult = (event) => {
        let transcript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join("");
        setText(transcript); // Update App's text state if needed
      };

      recognition.onend = () => {
        setIsListening(false);
        props.showAlert("Listening stopped", "info");
      };

      recognition.onerror = (event) => {
        setIsListening(false);
        props.showAlert(`Error: ${event.error}`, "error");
      };
    } else {
      // Stop Listening
      setIsListening(false);
      recognition.stop();
      props.showAlert("Stopped Listening", "info");
    }
  };
  // handle Uppercase
  const handleUpClick = () => {
    if (text.trim().length < 1) {
      props.showAlert("Please enter text first", "error");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("converted to UpperCase", "success");
    }
  };
  // handle Lowercase
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
  // handle Clear
  const handleClearClick = () => {
    if (text.trim().length < 1) {
      // Check if text is empty or only whitespace
      props.showAlert("Please enter text first", "error");
    } else {
      window.confirm("Are you sure to clear text.");
      let newText = "";
      setText(newText);
    }
  };
  // handle Copy
  const handleCopy = () => {
    if (text.trim().length < 1) {
      props.showAlert("Please enter text first", "error");
    } else {
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showAlert("copied to Clipboard!", "success");
    }
  };
  // handle Extraspaces
  const handleExtraSpaces = () => {
    if (text.trim().length < 1) {
      props.showAlert("Please enter text first", "error");
    } else {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("extra space removed", "success");
    }
  };
  // handle Sentencase
  const handleSentenceCase = () => {
    if (text.trim().length < 1) {
      props.showAlert("Please enter text first", "error");
    } else {
      let newText = text
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
      setText(newText);
      props.showAlert("Converted to Sentence Case", "success");
    }
  };
  // handle Onchange
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // Download as Word Document
  const handleDownloadWord = () => {
    const blob = new Blob([text], { type: "application/msword", unit: "mm", format: "a4"  });
    saveAs(blob, "text.doc");
    props.showAlert("Downloaded as Word Document", "success");
  };

  // Download as PDF
  const handleDownloadPDF = () => {
    const pdf = new jsPDF({ unit: "mm", format: "a4" }); // A4 size with millimeter units
    // Set font size
    pdf.setFontSize(12);
    // Adjust text position and wrap text
    const lines = pdf.splitTextToSize(text, 180); // Wrap text to fit within 180 units
    pdf.text(lines, 10, 20); // Add wrapped text starting at (10, 20)
    // Save PDF
    pdf.save("text.pdf");
    // Show alert
    props.showAlert("Downloaded as PDF", "success");
  };

  return (
    <>
      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading} </h2>
        <div>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Type or Paste text to change case..."
            id="myBox"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
        <button
            className={`btn ${
              props.mode === "light" ? "btn-success" : "bg-gradient"
            } text-white mx-1 my-1`}
            onClick={handleDownloadWord}
          >
            <i className="fa-solid fs-5 fa-circle-arrow-down"onClick={handleDownloadWord} ></i> 
          </button>
          <button
            className={`btn ${
              props.mode === "light" ? "btn-success" : "bg-gradient"
            } text-white mx-1 my-1`}
            onClick={handleDownloadPDF}
          >
            <i class="fa-solid fs-5 fa-file-pdf"></i>
          </button>
        </div>
        <div className="container ">
          <button
            className={`btn ${
              props.mode === "light" ? "btn-primary" : "bg-gradient"
            } text-white mx-1 my-1`}
            onClick={handleToggleListening}
          >
            {isListening ? (
              <i className="fa-solid fa-microphone-lines-slash"></i>
            ) : (
              <i className="fa-solid fa-microphone-lines"></i>
            )}
          </button>
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
            onClick={handleSentenceCase}
          >
            Convert to SentenceCase
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
            Copy to Clipboard
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
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}
          </b>{" "}
          Minutes read
        </p>
        <h3>Preview</h3>
        <p className="mb-5">{text.length > 0 ? text : "Nothing to preview!"}</p>
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
