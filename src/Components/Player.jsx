import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}){

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit(){
        setIsEditing((editing) => !editing);

        if(isEditing){
            onChangeName(symbol, playerName);
        }
        
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    //This code is commented because Practice purpose
    //let btnCaption = 'Edit';
    if(isEditing){
        editablePlayerName = <input type="text" value={playerName} onChange={handleChange} required/>;
      //  btnCaption = 'Save';
    }

    return(
        <>
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
        </>
    );
}