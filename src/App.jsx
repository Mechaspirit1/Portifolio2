import Header from "./Header";
import Navbar from "./NavBar";
import Cards from "./Cards";
import Footer from "./Footer";
import About from "./About";

function App() {
    return(
        <>
            <div className="navbar">
                <Navbar/>
            </div>

            <div className="head">
                <Header/>
            </div>

            <About/>

            <div className="main">
                <h1 className="title"> Projects</h1>
                <div className="cardBody">
                    <Cards
                        imgSrc = "./weatherly.png"
                        cardTitle = "Weatherly.js"
                        cardText = {"A fully functioning front-end weather application\nusing plain HTML, CSS and Javascript.\n"}
                        projLink = "https://mechaspirit1.github.io/Weather-App/"
                        srcCode = "https://github.com/Mechaspirit1/Weather-App"
                    />
                    <Cards
                        imgSrc = "./book.png"
                        cardTitle = "Book Repo"
                        cardText = {"A front-end application to search for books and authors\nmaking use of the Open Library API\n"}
                        projLink = "https://mechaspirit1.github.io/Book-Repo/"
                        srcCode = "https://github.com/Mechaspirit1/Book-Repo"
                    />
                    <Cards
                        imgSrc = "./palette.png"
                        cardTitle = "Color Palette Generator"
                        cardText = {"A basic application demonstrating DOM manipulation\nand handling random values in code\n"}
                        projLink = "https://mechaspirit1.github.io/Color-palette-generator/"
                        srcCode = "https://github.com/Mechaspirit1/Color-palette-generator"
                    />
                </div>
            </div>

            <Footer/>
        </>
    );
}
export default App
