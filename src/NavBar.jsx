import Button from "./Button.jsx";

function Navbar(){
    return(
        <>  
            <img src="/vite.svg" alt="" className="icon"/>
            <h2>Pablo Loschi</h2>

            <div className="links">
                <a href="https://github.com/Mechaspirit1" target="_blank">Github</a>
                <a href="https://www.linkedin.com/in/pablo-loschi-b55055381/" target="_blank">LinkedIn</a>
                <a href="https://github.com/Mechaspirit1" target="_blank">CV</a>
            </div>

            <Button/>
        </>
    );
}

export default Navbar;