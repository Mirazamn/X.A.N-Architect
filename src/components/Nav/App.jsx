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
                        <NavLink className="li" to="/">главная</NavLink>            
                    </li>


                    <li>
                        <NavLink className="li" to="/about">О Бренде</NavLink>
                    </li>
                    <li>
                        <NavLink className="li" to="/adventages">Преимущества</NavLink>
                    </li>
                    <li>
                        <NavLink className="li" to="/freeclub">открыть клуб</NavLink>
                    </li>
                     <li>
                        <NavLink className="li" to="/contact">контакты</NavLink>            
                    </li>
                </ul>
            </div>
        </nav>
        </div>
        <hr />
        {/* <Outlet/> */}
        
        </>
    )
}

export default Nav;