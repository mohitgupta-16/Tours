import React from "react"
import Card from "./Card"

export default function Tours({ tours , removeTour}) {
    return (
        <div className="container">
            <div>
                <h2  className="title">Plan With Mohit</h2>
            </div>
            <div className="cards">
                {tours.map((tour) => {
                    return <Card {...tour} removeTour={removeTour}></Card>
                })}
            </div>
        </div>
    )
}
