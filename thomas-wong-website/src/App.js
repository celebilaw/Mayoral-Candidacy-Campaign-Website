import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar.js";
import HomePage from "./components/HomePage.js";
import Volunteer from "./components/Volunteer.js";
import Donate from "./components/Donate.js";
import Photos from "./components/Photos.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
        <footer className="footnote">
          Paid for by Thomas Wong for Monterey Park City Council 2022 - FPPC #1442651
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
