import React, { useState, useEffect } from "react";
import Pre from "../src/components/pre";
import Navbar from "./components/navbar.js";
import Home from "./components/home/home.js";
import About from "./components/about/about.js";
import Projects from "./components/projects/projects.js";
import Footer from "./components/footer.js";
import Resume from "./components/resume/resume.js";
import {
  BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Pre load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;