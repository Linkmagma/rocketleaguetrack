import React from "react";
import CurrentRank from "./CurrentRank";
import PreferredRank from "./PreferredRank";

function winsNeeded () {
    const calculateWinsNeeded = () => {
        const amountOfWins = 1 + 5 * 8;
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