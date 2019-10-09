import React from "react";
import "./style.css";

const BallCard = props => (
    <div className="card" onClick={() => props.clickCount(props.id)}>
        <div className="img-conatainer">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
)

export default BallCard;
