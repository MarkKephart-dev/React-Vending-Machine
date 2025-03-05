import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    console.log("NavBar is rendering");
    return (
        <nav className="NavBar">
            <NavLink 
                to="/" 
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
            >
                Home
            </NavLink>
            <NavLink 
                to="/peanuts"
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
            >
                Peanuts
            </NavLink>
            <NavLink 
                to="/water"
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
            >
                Water
            </NavLink>
            <NavLink 
                to="/almondjoy"
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
            >
                AlmondJoy
            </NavLink>
        </nav>
    )
}

export default NavBar;