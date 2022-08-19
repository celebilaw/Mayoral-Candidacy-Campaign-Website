import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "./icons/logo.svg";
import { useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    function navCollapseFlip() {
        const navBarLinks = document.querySelector(".navbar-links");
        const navButton = document.querySelector(".nav-button-link");
        navBarLinks.classList.toggle("active");
        navButton.classList.toggle("active");
        setNavOpen(!navOpen);
    }

    function navClose() {
        const navBarLinks = document.querySelector(".navbar-links");
        const navButton = document.querySelector(".nav-button-link");
        if (navOpen) {
            navBarLinks.classList.toggle("active");
            navButton.classList.toggle("active");
            setNavOpen(!navOpen);
        }
    }

    return (
        <nav className="navbar">
            <Link to="/" className="brand-title">
                <Logo className="brand-logo" onClick={() => navClose()}/>
            </Link>
            {/* eslint-disable-next-line */}
            <a href="#" className="toggle-nav" onClick={() => navCollapseFlip()}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links" onClick={() => navCollapseFlip()}>
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
            <a className="nav-button-link" 
                href="https://www.efundraisingconnections.com/c/ThomasWongforMontereyParkCityCouncil2022"
                onClick={() => navCollapseFlip()}
            >
                <button type="button" className="nav-button">
                    Donate
                </button>
            </a>
        </nav>
    )
}

export default Navbar;