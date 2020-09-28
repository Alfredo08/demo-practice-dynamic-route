import React from 'react';

function Test( props ){
    console.log( props );
    return(
        <div>
            Test {props.match.params.identifier}
        </div>
    );
}

export default Test;