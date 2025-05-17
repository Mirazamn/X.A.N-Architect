import './App.css'

function Characteristics() {
    return (
        <section className="characteristics" id='characteristics'>
            <div className="container flex">
                 <div className="flex">

                    <div className="card">
                        <h2 className='display-m'>Professional <br /> Loyihalash</h2>
                        <hr className='hr'/>
                        <p className='body-m'>Har bir bino — bu san’at asari. <br /> Biz mijozlaringiz ehtiyojlari va davlat me’yorlariga <br /> to‘liq mos loyiha yaratamiz.</p>
                    </div>    

                    <div className="s-card">
                        <h2 className='display-m'>Sifatli va Mas’uliyatli Yondashuv</h2>
                        <hr className='hr'/>
                        <p className='body-m'>Loyihadan tortib, yakuniy hujjatgacha — barcha <br /> jarayonlarda aniqlik va e’tibor.</p>
                    </div>
                    
                </div>

                 <div className="flex">

                    <div className="s-card">
                        <h2 className='display-m'>Zamonaviy Dizayn <br /> Yondashuvi</h2>
                        <hr className='hr'/>
                        <p className='body-m'>Klassik va zamonaviy uslublarning uyg‘unligi — har bir mijozga moslashtirilgan dizayn.
                        </p>
                    </div>

                    <div className="card c-img">
                        <h2 className='display-m'>Tez va Ishonchli Hujjatlashtirish</h2>
                        <hr className='hr'/>
                        <p className='body-m'>Qurilgan binoni kadastrga kiritish, ruxsatnoma olish va boshqa hujjat ishlari bizning zimdamizda.</p>
                    </div>    

                </div>
            </div>
        </section>
    )
}

export default Characteristics;