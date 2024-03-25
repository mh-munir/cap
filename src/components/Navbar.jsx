"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Logo from '../../public/assets/logo.jpg'
import Image from 'next/image';


const Navbar = () => {
    const [stickyClass, setStickyClass] = useState('');
    const [navHide, setNavActive] = useState(true);
    const toggle = () => setNavActive(!navHide);

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
      }, []);
      const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 250 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
      };
    return (
        <nav className={`navbar ${stickyClass}`}>
            <div className="nav-container">
                <button className='toggle-button' onClick={toggle}>
                    <span className={`line ${navHide ? 'line-1' : 'cross-1'}`}></span>
                    <span className={`line ${navHide ? 'line-2' : 'cross-2'}`}></span>
                </button>
                <Link className='brand-name' href="/"> 
                    <Image src={Logo} alt="Brand"/>
                </Link>
                <div className={navHide ? "navHide" : "navActive"}>   
                    <ul className='navitems'>
                        <li>
                        <Link className='nav-link' href="/software">Software</Link>
                        </li>
                        <li>
                            <Link className='nav-link' href="/sales-marketing">Sale & Marketing</Link>
                        </li>
                        <li>
                            <Link className='nav-link' href="/marketing">marketing</Link>
                        </li>
                        <li>
                            <Link className='nav-link' href="/contact-us">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar