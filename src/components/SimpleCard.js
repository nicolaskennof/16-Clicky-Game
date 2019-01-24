import React from "react";
import "./simplecard.css"

function SimpleCard(props) {
    return (
        <div role="img" className="p-0 text-center col-6 col-sm-4 col-md-3">
            <div className="characterContainer">
            <img onClick={()=>props.onClickImage(props.id)} className="characterImage" alt={props.image} src={`/assets/img/${props.image}`} />
            </div>
        </div>
    )
}

export default SimpleCard;