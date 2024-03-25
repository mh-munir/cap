import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-top'>
                    <div className='call-link'>
                        <label className='call-label'>More ways to contact :</label>
                        <Link className='call-link' href="tel:01317686695"> +880 1407 04 78 58</Link>
                    </div>
                    <div className='social-link'>
                        <ul className='social-items'>
                            <li>
                                <Link className='social-link' href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.779" height="14.779" viewBox="0 0 14.779 14.779">
                                        <path id="facebook-rect" d="M2.7,0A2.693,2.693,0,0,0,0,2.7V12.08a2.693,2.693,0,0,0,2.7,2.7H7.783V9H6.256V6.921H7.783V5.144c0-1.4.9-2.678,2.982-2.678a12.6,12.6,0,0,1,1.464.081l-.049,1.943s-.635-.006-1.328-.006c-.75,0-.87.346-.87.919V6.921h2.257L12.142,9H9.983v5.778h2.1a2.693,2.693,0,0,0,2.7-2.7V2.7A2.693,2.693,0,0,0,12.08,0Z" fill="#313132" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link className='social-link' href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.779" height="14.779" viewBox="0 0 14.779 14.779">
                                        <path id="linkedin-rect" d="M2.9.009a2.9,2.9,0,0,0-2.9,2.9v8.987a2.9,2.9,0,0,0,2.9,2.9h8.987a2.9,2.9,0,0,0,2.9-2.9V2.905a2.9,2.9,0,0,0-2.9-2.9Zm.729,2.439a1.164,1.164,0,1,1-.015,2.32H3.6a1.163,1.163,0,1,1,.029-2.32Zm6.581,3.08c1.469,0,2.569.96,2.569,3.023V12.4H10.55V8.809c0-.9-.323-1.519-1.131-1.519a1.222,1.222,0,0,0-1.145.816,1.524,1.524,0,0,0-.074.545V12.4H5.968s.029-6.086,0-6.716H8.2v.951a2.216,2.216,0,0,1,2.012-1.109ZM2.5,5.686H4.733V12.4H2.5V5.686Z" transform="translate(-0.007 -0.009)" fill="#313132" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link className='social-link' href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.458" height="14.196" viewBox="0 0 17.458 14.196">
                                        <path id="twitter" d="M8.484,20.2A10.127,10.127,0,0,0,18.676,10c0-.154,0-.307-.007-.461a7.3,7.3,0,0,0,1.789-1.86,7.26,7.26,0,0,1-2.06.567,3.6,3.6,0,0,0,1.578-1.984,7.126,7.126,0,0,1-2.278.867,3.582,3.582,0,0,0-6.2,2.452,3.958,3.958,0,0,0,.091.817A10.173,10.173,0,0,1,4.209,6.656,3.592,3.592,0,0,0,5.32,11.442,3.623,3.623,0,0,1,3.7,10.995v.049A3.591,3.591,0,0,0,6.57,14.558a3.493,3.493,0,0,1-.943.126,3.534,3.534,0,0,1-.672-.063A3.582,3.582,0,0,0,8.3,17.109a7.185,7.185,0,0,1-4.45,1.536A6.891,6.891,0,0,1,3,18.6a10.19,10.19,0,0,0,5.485,1.6" transform="translate(-3 -6)" fill="#313132" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p className='copyright-text'>ACAP</p>
                    <nav className='footer-nav'>
                        <ul className='footer-navitems'>
                            <li>
                                <Link className='footer-link' href="/"> Help </Link>
                            </li>
                            <li>
                                <Link className='footer-link' href="/"> Send Feedback</Link>
                            </li>
                            <li>
                                <Link className='footer-link' href="/"> Privacy</Link>
                            </li>
                            <li>
                                <Link className='footer-link' href="/">Terms</Link>
                            </li>
                            <li>
                                <Link className='footer-link' href="/">Disclaimer</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer