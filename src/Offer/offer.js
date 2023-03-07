import React from "react";
import './offer.css'

function Offer() {
    return (
        <div id="offerComponent" data-aos="fade-down">
            <div className="text" id='o1' data-aos="fade-down" data-aos-duration={"1000"}>
                <h4>NASZA OFERTA</h4>
                <ul>
                    <li>Systemy automatycznego nawadniania</li>
                    <li>Zakładanie trawników z siewu/rolki</li>
                    <li>Tarasy kompozytowe/drewniane</li>
                    <li>Pielęgnacja terenów zieloncyh</li>
                    <li>Systemy koszenia automatycznego</li>
                </ul>
                <h4>Oferujemy zarówno projekt, jak i realizację!</h4>
            </div>
            <div className="text" id="p4" data-aos="fade-down" data-aos-duration={"1000"}>
                <img src={require('./Photos/bartek.jpg')} alt='bartek'/>
                <h2>Bartosz Jakubiak<br/><span>mgr inż. architekt krajobrazu</span></h2>
            </div>

        </div>
    )
}

export default Offer;