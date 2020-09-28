import React from 'react';

function Drink( props ){
    console.log( props );

    return(
        <div>
            <h1> {props.drink.strDrink} </h1>
            <h2> {props.match.params.currentIdDrink}</h2>
            <img src={props.drink.strDrinkThumb}/>
        </div>
    );

}

export default Drink;