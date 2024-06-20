import React from 'react'
import { useState, Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
// import Logo from "./LOGO/logodark.png"
// import Logo from "./LOGO/white.png"
import './header.css'
import Logo from './images/logo.png'

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 60) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <Fragment>

            <nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
                <div className=" Navcontainer">
                    <div className="logo d-flex">
                        {/* <Link to="/" style={{ textDecoration: "none", color: 'white'}} className='mt-3'><h4 style={{color:"white"}}>ASEF a.s.b.l.</h4></Link> */}
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <img className='logostyle' src={Logo}/>
                        </Link>
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <span> </span>
                        <span id="spanleft"></span>
                        <span> </span>
                    </div>
                    <div className={`mt-2 nav-elements  ${showNavbar && 'active'}`}>
                        <div className='menu-closed' onClick={handleShowNavbar}>
                            <button className="Buttonclose">
                                <span className="X"></span>
                                <span className="Y"></span>
                                <div className="closebutton">Fermé</div>
                            </button>
                        </div>
                        <ul className='navbarList'>
                            <li >
                                <NavLink to="/home"  onClick={handleShowNavbar}>Accueil</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" onClick={handleShowNavbar}>Apropos </NavLink>
                            </li>
                            <li>
                                <NavLink to="/service" onClick={handleShowNavbar}>Activites</NavLink>
                            </li>
                            <li>
                                <NavLink to="/project" onClick={handleShowNavbar}>Project</NavLink>
                            </li>
                            <li className="contactNavbar">
                                <NavLink to="/contact" onClick={handleShowNavbar}>Contact</NavLink>
                            </li>
                    
                        </ul>

                    </div>


                </div>
            </nav>
        </Fragment>
    )
}

export default Header
