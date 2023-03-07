import 'aos/dist/aos.css';
import React, {useEffect, useState} from "react";

import './App.css';

import About from "./About/about";
import Gallery from "./Gallery/Gallery";
import NavBar from "./NavBar/NavBar";
import Offer from "./Offer/offer";
import AOS from 'aos';


function App() {
    useEffect(() => {
        AOS.init();
        }, []);

    const [page, setPage] = useState('about');

    const handleChange = (newPage) => {
        setPage(newPage);
    }

    const renderPage = () => {
        switch (page) {
            case 'about':
                return <About/>
            case 'real':
                return <Gallery/>
            case 'offer':
                return <Offer/>
            default:
                return <About/>
        }
    }

  return (
    <div className="App">
        <NavBar handleChange={handleChange}/>
        {renderPage()}
        <footer data-aos={"fade-down"} id="footer">
            <h2>Bądźmy w kontakcie!</h2>
            <div id="links">
                <a href="https://www.instagram.com/novo.garden/" target="_blank" rel="noreferrer" >
                <div className="contact">
                    <img src={require('./ig_logo.png')} alt='ig' className="contactIcon"/><h3>@novo.garden</h3>
                </div>
            </a>
                <a href="https://www.facebook.com/novo.garden.pak" target="_blank" rel="noreferrer" >
                <div className="contact">
                    <img src={require('./fb_logo.png')} alt='fb' className="contactIcon"/><h3>@novo.garden.pak</h3>
                </div>
            </a>
                <a href="tel:+48692423922">
                <div className="contact">
                    <img src={require('./phone.png')} alt='phone' className="contactIcon"/><h3>+48692423922</h3>
                </div>
            </a>
                <a href="mailto:biuro@novo-garden.com">
                <div className="contact">
                    <img src={require('./mail.png')} alt='mail' className="contactIcon"/><h3>biuro@novo-garden.com</h3>
                </div>
            </a>
            </div>
            <h4>
                &copy; Novo Garden 2023
            </h4>
            <h5>
                Projekt i wykonanie strony: <a href="https://www.github.com/ant-st" target='_blank' rel="noreferrer" >AntST</a>
            </h5>
        </footer>
    </div>
  );
}

export default App;

//<About/>