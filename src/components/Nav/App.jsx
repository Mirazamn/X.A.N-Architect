import {Outlet, NavLink} from "react-router-dom"
import './App.css'

function Nav() {
    return(
        <>
       <div className="container">
        <nav className="container">
            <div className="container">
                <ul className="flex">
                    <li>
                            <a href="#hero">Asosoiy </a>
                    </li>


                    <li>
                        <a href="#features">Biz haqimizda</a>
                    </li>
                    <li>
                       <a href="#characteristics"> Xizmatlar</a>
                    </li>
                    <li>
                        <a href="#services">Ustunliklar</a>
                    </li>
                     <li>
                        <a href="#contacts">Bog'lanish</a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
        {/* <Outlet/> */}
        
        </>
    )
}

export default Nav;