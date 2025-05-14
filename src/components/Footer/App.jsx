import {NavLink} from "react-router-dom"
import './App.css'

function Footer() {
    return (
        <>
            <footer>
                <div className="container flex">
                    <ul>
                        <h6>КАТАЛОГ ТОВАРОВ</h6>

                        <li>Кардио тренажеры</li>
                        <li>Composite Strength</li>
                        <li>True Stretch</li>
                        <li>Сайклинг</li>
                        <li>Групповые тренировки</li>
                        <li>Силовые тренажеры</li>
                        <li>Консоли</li>
                        <h4>© TRUE FITNESS</h4>
                    </ul>

                    <ul>
                        <h6>ИНФОРМАЦИЯ</h6>

                        <NavLink className="li" to="/about">О Бренде</NavLink>
                        <NavLink className="li" to="/adventages">Преимущества</NavLink>
                        <NavLink className="li" to="/freeclub">открыть клуб</NavLink>
                        <NavLink className="li" to="/">продукции</NavLink>
                        <NavLink className="li" to="/contact">контакты</NavLink>
                    </ul>

                    <ul>
                        <h6>КОНТАКТЫ</h6>
                        <li>Политика конфиденциальности</li>
                        <li>Контакты</li>
                    </ul>

                    <h5>ПОДПИСАТЬСЯ НА НОВОСТИ <br /> И АКЦИИ</h5>

                </div>
            </footer>
        </>
    )
}


export default Footer;