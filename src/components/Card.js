import React, { useState } from "react"

export default function Card(props) {
    const [readmore, setReadmore] = useState(false)
    const [description, setDescription] = useState(
        `${props.info.substring(0, 200)}....`
    )

    const readmoreHandler = () => {
        setReadmore(!readmore)
        readmore
            ? setDescription(`${props.info.substring(0, 200)}....`)
            : setDescription(`${props.info} `)
    }

    return (
        <div className="card">
            <img src={props.image} className="image" alt="" />
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {props.price}</h4>
                    <h4 className="tour-name">{props.name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? "Show Less" : "Read More"}
                    </span>
                </div>
            </div>
            <button
                className="btn-red"
                onClick={() => props.removeTour(props.id)}
            >
                Not Interested
            </button>
        </div>
    )
}
