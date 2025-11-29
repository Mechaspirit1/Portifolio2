function Cards(props){
    return(
        <div className="cardDefault">
            <img src={props.imgSrc} alt="" className="cardImg"/>
            <h2 className="cardTitle">{props.cardTitle}</h2>
            <p>{props.cardText}</p>

            <form action={props.projLink} href="_blank">
                <button className="cardBtn">Visit !</button>
            </form>
        </div>
    );
}

export default Cards;