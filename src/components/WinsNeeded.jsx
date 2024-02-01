import React from "react";
import CurrentRank from "./CurrentRank";
import PreferredRank from "./PreferredRank";

function winsNeeded () {
    const calculateWinsNeeded = () => {
        const amountOfWins = 5;
        return amountOfWins;
    }

    const amountOfWins = calculateWinsNeeded();

    return (
        <div>
            <p>Wins Needed: {amountOfWins}</p>
        </div>
    )
}



export default winsNeeded;