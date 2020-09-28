import React from 'react';

function HobbyForm( props ){
    return(
        <form onSubmit={(event) => props.addHobby(event)}> {/* props.addHobby */}
            <label htmlFor="newHobby"> Type the new hobby: </label>
            <input type="text" id="newHobby" />
            <button type="submit">
            Add hobby
            </button>
        </form>
    );
}

export default HobbyForm;