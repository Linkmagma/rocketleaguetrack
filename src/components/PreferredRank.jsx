import React from "react";

function preferredRank () {

    return (
        
    <div>
        <div>

            <h1>What is Your Prefferred Rank And Division?</h1>

            <select name="rank" id="rank">
                <option value="Bronze">Bronze</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
                <option value="Platinum">Platinum</option>
                <option value="Diamond">Diamond</option>
                <option value="Champion">Champion</option>
                <option value="Grand Champion">Grand Champion</option>
                <option value="Supersonic Legend">Supersonic Legend</option>
            </select>

            <select name="rank_number" id="rank_number">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            <select name="division" id="division">
                <option value="Div_1">Division 1</option>
                <option value="Div_2">Division 2</option>
                <option value="Div_3">Division 3</option>
                <option value="Div_4">Division 4</option>
            </select>

        </div>
    </div>

    );
}

export default preferredRank;