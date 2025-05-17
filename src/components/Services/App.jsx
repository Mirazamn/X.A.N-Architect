import './App.css'

import { TfiRulerAlt2 } from "react-icons/tfi";
import { MdEditDocument } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import { GrDocumentWord } from "react-icons/gr";
import { PiCraneTowerBold } from "react-icons/pi";

import Home3 from '../../assets/home-3.jpg'

function Services() {
    return (
        <section className="services" id='services'>
            <div className="flex">
                <div className="services-txt">
                    <h1>Xizmatlarimiz</h1>

                    <div className="cards flex">

                        <div className="card">
                            <TfiRulerAlt2 className='icon'/>
                            <h5>Arxitektura Loyihalash</h5>
                            <p>Yangi binolar uchun to‘liq arxitektura chizmalari va 3D dizaynlar tayyorlash. </p>
                        </div>

                        <div className="card">
                            <MdEditDocument className='icon'/>
                            <h5>Kadastrga Kiritish <br /> Xizmati</h5>
                            <p>Qurilgan yoki mavjud binoni <br /> rasmiy ravishda kadastr <br /> hujjatlariga kiritish.</p>
                        </div>

                        <div className="card">
                            <FaHome className='icon'/>
                            <h5>Fasad Dizayni</h5>
                            <p>Bino tashqi ko‘rinishini zamonaviy va jozibali qilish uchun individual fasad loyihalari.</p>
                        </div>

                        <div className="card">
                            <GiBrickWall className='icon'/>
                            <h5>Rekonstruksiya Loyihalari</h5>
                            <p>Eski binolarni yangilash, qayta qurish yoki zamonaviy ko‘rinishga olib kelish.</p>
                        </div>

                        <div className="card">
                            <GrDocumentWord className='icon'/>
                            <h5>Hujjat Tayyorlash <br /> va Ruxsatnomalar</h5>
                            <p>Qurilish boshlashdan oldingi barcha zaruriy ruxsatnomalar va arxiv hujjatlarini rasmiylashtirish.</p>
                        </div>

                        <div className="card">
                            <PiCraneTowerBold className='icon'/>
                            <h5>Muvofiqlik Ekspertizasi</h5>
                            <p>Loyihalarning davlat standartlari va texnik me’yorlarga mosligini aniqlash.</p>
                        </div>

                    </div>
                </div>

                <aside>
                    <img src={Home3} alt="" />
                </aside>
            </div>
        </section>
    )
}


export default Services;