import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "./icons/logo.svg";
import "../css/Navbar.css";

window.onload = function() {
    const toggleNav = document.getElementsByClassName("toggle-nav")[0];
    const navBarLinks = document.getElementsByClassName("navbar-links")[0];
    const navButton = document.getElementsByClassName("nav-button")[0];
    toggleNav.addEventListener("click", () => {
        navBarLinks.classList.toggle("active");
        navButton.classList.toggle("active");
    })
}

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="brand-title"> 
                <Link to="/"><Logo className="brand-logo"/> </Link>
            </div>
            {/* eslint-disable-next-line */}
            <a href="#" className="toggle-nav">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <ul>
                    <li>
                        <Link className="nav-link" to="/bio"> About Me </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/volunteer"> Volunteer </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/gallery"> Gallery </Link>
                    </li>
                </ul>
            </div>
            <button type="button" className="nav-button">
                <a className="nav-button-link" href="https://www.efundraisingconnections.com/c/ThomasWongforMontereyParkCityCouncil2022">
                    Donate
                </a>
            </button>
        </nav>
    )
}

export default Navbar;