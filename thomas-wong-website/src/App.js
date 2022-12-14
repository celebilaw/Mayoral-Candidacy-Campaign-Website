import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar.js";
import Biography from "./components/Biography.js";
import HomePage from "./components/HomePage.js";
import Volunteer from "./components/Volunteer.js";
import Gallery from "./components/Gallery.js";

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bio" element={<Biography />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
        <footer className="footnote">
          <span className="icon-container">
            {/* eslint-disable */}
            <a href="https://www.facebook.com/thomaswong05" class="fa fa-facebook" />
            <a href="https://www.instagram.com/thomaswongsgv/" class="fa fa-instagram" />
            {/* eslint-enable */}
          </span>
          <span className="reqNote">Paid for by Thomas Wong for Monterey Park City Council 2022 - FPPC #1442651 </span>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
