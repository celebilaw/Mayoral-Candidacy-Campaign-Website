import { Link } from "react-router-dom";
import "../css/Navbar.css";

window.onload = function() {
    const toggleNav = document.getElementsByClassName("toggle-nav")[0];
    const navBarLinks = document.getElementsByClassName("navbar-links")[0];
    toggleNav.addEventListener("click", () => {
        navBarLinks.classList.toggle("active");
    })
}

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="brand-title" to="/"> 
                <span> Thomas Wong </span> 
                <span className="subTitle"> Monterey Park City Council </span> 
            </Link>
            {/* eslint-disable-next-line */}
            <a href="#" className="toggle-nav">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <ul>
                    <li>
                        <Link className="nav-link" to="/volunteer"> Volunteer </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/donate"> Donate </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/photos"> Photos </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;