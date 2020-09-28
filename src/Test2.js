import React from 'react';

function Test2( props ){
    console.log( props );
    return(
        <div>
            Test2 {props.match.params.identifier}
        </div>
    );
}

export default Test2;