import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/volunteer" />
          <Route path="/donate" />
          <Route path="/photos" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
