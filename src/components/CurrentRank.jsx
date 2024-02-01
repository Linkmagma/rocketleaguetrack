import React from "react";

function currentRank () {
    return (
        <div>
            <h1>What is Your Current Rank And Division?</h1>

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
            </select>

            <select name="division" id="division">
                <option value="Div_1">Division 1</option>
                <option value="Div_2">Division 2</option>
                <option value="Div_3">Division 3</option>
                <option value="Div_4">Division 4</option>
            </select>

        </div>
    );

    function convertToMmr () {
        var selectedRank = document.getElementById('rank').value;
        var selectedRankNumber = document.getElementById('rank_number').value;
        var selectedDivision = document.getElementById('division').value;
        
        let mmr = 0;
        
        if (selectedRank === 'Bronze') {
            mmr = 100;
        } else if (selectedRank === 'Silver') {
            mmr = 200;
        } else if (selectedRank === 'Gold') {
            mmr = 300;
        } else if (selectedRank === 'Platinum'){
            mmr = 400;
        } else if (selectedRank === 'Diamond'){
            mmr = 500;
        } else if (selectedRank === 'Champion'){
            mmr = 600;
        } else if (selectedRank === 'Grand Champion'){
            mmr = 700;
        } else if (selectedRank === 'Supersonic Legend'){
            mmr = 800;
        }
    }
        
}



export default currentRank;