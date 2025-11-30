import Button from "./Button.jsx";

function Navbar(){
    return(
        <>  
            <img src="/logo.png" alt="" className="icon"/>
            <h2>Pablo Loschi</h2>

            <div className="links">
                <form action="https://github.com/Mechaspirit1" target="_blank">
                    <button className="btn">Github</button>
                </form>
                <form action="https://www.linkedin.com/in/pablo-loschi-b55055381/" target="_blank">
                    <button className="btn">LinkedIn</button>
                </form>
                <form action="https://github.com/Mechaspirit1" target="_blank">
                    <button className="btn">CV</button>
                </form>
            </div>
        </>
    );
}

export default Navbar;