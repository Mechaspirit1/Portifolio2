function Cards(props){
    return(
        <div className="cardDefault">
            <img src={props.imgSrc} alt="" className="cardImg"/>
            <h2 className="cardTitle">{props.cardTitle}</h2>
            <p>{props.cardText}</p>

            <div className="cardNavs">
                <form action={props.projLink} target="_blank">
                    <button className="cardBtn">Visit !</button>
                </form>

                <form action={props.srcCode} target="_blank">
                    <button className="cardBtn">Source code</button>
                </form>
            </div>
            
        </div>
    );
}

export default Cards;