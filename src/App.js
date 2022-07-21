// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const [mode, setMode] = useState("light");
  return (
    <>
      <Router>
        <Navbar title="Text Utilities" mode={mode} toggleMode={toggleMode} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />

            <Route
            exact path="/"
              element={<TextForm heading="Enter The Text to Analyze" />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
