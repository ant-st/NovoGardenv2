import './NavBar.css';

function NavBar(props) {
    const handleClick = ({target}) => {
        let newPage = target.id;
        console.log(newPage);
        props.handleChange(newPage);
    }

    return (
        <header>
            <img src={require("./Logo.png")} alt=""/>
            <nav>
                <ul>
                    <li id="about" onClick={handleClick}>O nas</li>
                    <li id="offer" onClick={handleClick}>Oferta</li>
                    <li id="real" onClick={handleClick}>Realizacje</li>
                    <li id="contact"> <a href="#footer">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;