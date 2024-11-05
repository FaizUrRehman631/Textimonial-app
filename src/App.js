import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";
import About from "./components/About.js";
import Alert from "./components/Alert.js";
import Home from "./components/Home.js";
import Welcome from "./components/Welcome.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // for toggle mode extra colors
  // const removeCls=()=>{
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  // }
  const toggleMode = () => { // add parameter cls to run color pallette
   // removeCls(); // toggle mode colors extra
    // document.body.classList.add('bg-'+cls) // toggle mode extra colors
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar Title="Textmonial" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route path="/Home" element={<Home mode={mode} />} />
          <Route path="/Welcome" element={<Welcome mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/Textform"
            element={
              <Textform
                showAlert={showAlert}
                heading="Enter text (copy and paste is fine) here:"
                mode={mode}
              />
            }
          />
          <Route path="/Alert" element={<Alert alert={alert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
