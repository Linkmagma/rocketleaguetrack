import React from "react";

function gameMode () {
    return (
        
        <div>
            <div>
    
                <h1>What Game Mode are you playing</h1>
    
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
    
            </div>
        </div>
    
        );
}