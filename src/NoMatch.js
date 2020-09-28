import React from 'react';

function NoMatch( props ){
    console.log( props );
    return(
        <div>
            {props.error}
        </div>
    );
}

export default NoMatch;