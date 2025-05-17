import './App.css'

import Product from '../../assets/product.svg'

function Features() {
    return (
        <section className="features" id='features'>
            <div className="container flex">
                <div className="features-txt">
                    <h1>X.A.N <br /> <span>Architect</span></h1>
                    <hr width="100px"/>
                    <p>Qurib qo'yilgan binoni kadastrga kiritmoqchisiz?</p>
                    <span>Ishonchli va Sifatli arxitektura xizmatlari</span>
                </div>

                <img src={Product} className="product" />
            </div>
        </section>
    )
}


export default Features;