import { Link } from 'react-router-dom';

import './App.css'
import { IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";


function Footer() {
    return (
        <>
            <footer>
                <div className="container flex">
                    <div className="social flex">
                        <a href='#'><IoCall className='icon' /></a>
                        <a href='#'><FaMapMarkerAlt className='icon' /></a>
                        <a href='#'><FaTelegramPlane className='icon' /></a>
                        <a href='#'><IoLogoFacebook className='icon' /></a>
                        <a href='#'><FaInstagram className='icon' /></a>
                    </div>

                    <ul className='flex'>
                        <li>
                            <a href="#hero">Asosoiy</a>
                        </li>
                        <li>
                            <a href="#features">Biz haqimizda</a>
                        </li>
                        <li>
                            <a href="#characteristics">Xizmatlar</a>
                        </li>
                        <li>
                            <a href="#services">Ustunliklar</a>
                        </li>
                        <li>
                            <a href="#contacts">Bog'lanish</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}


export default Footer;