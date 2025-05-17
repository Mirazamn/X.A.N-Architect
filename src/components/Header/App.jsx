import './App.css'

// Assets
import Logo from '../../assets/Logo.svg'
import MobileLogo from '../../assets/Logo.png'

function Header() {
    return (
        <header>
            <div className="container flex">
                <img src={Logo} className="desktop" />
                <img src={MobileLogo} className="mobile" />

                <div className="flex wrapper">

                    <div className="lang-num flex">
                        <select name="lang" id="">
                            <option value="ru">
                                Ru
                            </option>

                            <option value="uz" selected>
                                Uz
                            </option>

                            <option value="en">
                                En
                            </option>
                        </select>

                        <a href="tel:++998906066666">
                            +998 (90)-606-66-66
                        </a>
                    </div>

                    <button>
                        <a href="#contacts">
                            Bog‘lanish
                        </a>
                    </button>
                </div>

                </div>
        </header>
    )
}

export default Header;