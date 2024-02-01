import React from "react";

function gameMode () {
    return (
        
        <div>
            <div>
    
                <h1>What Game Mode are you playing</h1>
    
                <select name="gamemode" id="gamemode">
                    <option value="1v1">1v1</option>
                    <option value="2v2">2v2</option>
                    <option value="3v3">3v3</option>
                    <option value="Rumble">Rumble</option>
                    <option value="Hoops">Hoops</option>
                    <option value="Dropshot">Dropshot</option>
                    <option value="Snowday">Snowday</option>
                </select>
    
            </div>
        </div>
    
        );
}

export default gameMode;