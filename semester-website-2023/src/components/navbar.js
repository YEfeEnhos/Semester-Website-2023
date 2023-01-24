import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../components/navbar.css"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";



const Navbar = () =>{

    const [Mobile, setMobile] = useState(false)

    return(
        <nav className='navbar'>
            <div className='container'>
                <h3 className='logo'><Link to="/home">logo</Link></h3>
                <ul className= {Mobile ? "nav-links-mobile" : "nav-links" } onClick ={() => setMobile(false)}>
                    <Link to="/frontend"><li>Frontend</li></Link>
                    <Link to="/backend"><li>Backend</li></Link>
                </ul>
                <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                     {Mobile ? <ImCross /> : <FaBars /> }
                </button>
            </div>
        </nav>
    )
}

export default Navbar