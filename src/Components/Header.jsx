import logo from "../Images/TrollFace.svg"


const Header = () => {
    return (

        <>
            <nav>
                <img src={logo} alt="" />
                <h1>Meme Generator</h1>
                <p>React Course - Project 3</p>
            </nav>
        </>

    );
}

export default Header;