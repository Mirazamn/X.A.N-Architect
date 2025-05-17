import './App.css'

function Contacts() {
    return (
        <section className="contacts" id='contacts'>
            <div className="container flex">
                <h4>Biz bilan bog'laning!</h4>
                <h6>Har qanday savol, buyurtma yoki maslahat uchun biz bilan bog‘laning. Mutaxassislarimiz sizga tez va aniq javob beradi.</h6>

                <form action="#" className='flex'>
                    <input type="text" name="name" id="name" placeholder='Ism' required/>
                    <input type="tel" name="tel" id="tel" placeholder='+998 (99)-999-99-99' required/>
                    <button>Bog‘lanish</button>
                </form>

            </div>
        </section>
    )
}


export default Contacts;