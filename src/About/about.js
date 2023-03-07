import React from "react";
import './about.css'

function About() {
    return (
        <div id="about" data-aos="fade-down">
            <div className="text" id="p1">
                    <h2 data-aos="fade-right" data-aos-duration={"1000"}>Stwórz z nami swój wymarzony ogród!</h2>
                    <img src={require('./Photos/o1.jpg')} alt='ogrod1' data-aos="fade-left" data-aos-duration={"1000"}/>
            </div>
            <div className="text" id="p2">
                <h3>Zajmiemy się kompleksową obsługą Państwa ogrodu</h3>
                <div id="complex">
                    <div className="complex" data-aos="fade-right" data-aos-duration={"1000"}>
                        <img src={require('./Photos/complex1.jpg')} alt='complex1' />
                        <h2>Projektujemy</h2>
                    </div>
                    <div className="complex" data-aos="fade-down" data-aos-duration={"1000"}>
                        <img src={require('./Photos/complex2.jpg')} alt='complex2' />
                        <h2>Wykonujemy</h2>
                    </div>
                    <div className="complex" data-aos="fade-left" data-aos-duration={"1000"}>
                        <img src={require('./Photos/complex3.jpg')} alt='complex3' />
                        <h2>Pielęgnujemy</h2>
                    </div>
                </div>
            </div>
            <div className="text" id='p3' data-aos="fade-down" data-aos-duration={"1000"}>
                <h4>WIEDZA I DOŚWIADCZENIE</h4>
                <p>Praca przy roślinach oraz kształtowaniu krajobrau wymaga zaufania i wiedzy. Nasze wieloletnie doświadczenie
                praktyczne i teorytyczne w tym obszarze pozwala nam na tworzenie ogrodów przemyślanych, które w połączeniu z budynkiem
                 stworzą spójną całość.</p>
                <h4>KOMPLEKSOWOŚĆ</h4>
                <p>To, co nas wyróżnia, to kompleksowość - zdobyte doświadczenie w każdym z etapów realizacji, w połączeniu z wiedzą nabytą
                podczas specjalistycznych studiów, pozwala na wykonanie pracy na najwyższym poziomie, tak, by ogórd cieszył Państwa
                o każdej porze roku.</p>
            </div>
            <div className="text" id="p4" data-aos="fade-down" data-aos-duration={"1000"}>
                <img src={require('./Photos/bartek.jpg')} alt='bartek'/>
                <h2>Bartosz Jakubiak<br/><span>mgr inż. architekt krajobrazu</span></h2>
            </div>

        </div>
    )
}

export default About;