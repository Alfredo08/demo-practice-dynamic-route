import React from 'react';


function Hobby( props ){
    return(
        <div>
            <h2> I really like to {props.hobby.name}!</h2>
        </div>
    )
}

export default Hobby;