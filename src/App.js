import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Drink from './Drink';
import NoMatch from './NoMatch';

class App extends React.Component{
  state = {
    drinks : []
  };

  getDrinks = () => {

    let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

    fetch( url )
      .then( response => {
        if( response.ok ){
          return response.json();
        }

        throw new Error( "Something went wrong" );
      })
      .then( responseJSON => {
        this.setState({
          drinks : responseJSON.drinks
        });
      });
  }

  render(){
   return(
    <div>
       <div>
         The drinks api
      </div>
      <button onClick={this.getDrinks}>
        Click to grab drinks
      </button>

      {
        this.state.drinks.map( ( drink, index ) => {
          return (
            <div key={index}>
              <Link to={`/currentDrink/${drink.idDrink}`}> {drink.strDrink}  </Link>
            </div>);
        })
      }
      <Switch>
        <Route exact path="/currentDrink/:currentIdDrink" render={ (routeProps) => {
        
          const currentDrink = this.state.drinks.find( ( drink ) => {
            if( drink.idDrink === routeProps.match.params.currentIdDrink ){
              return drink;
            }
          });

          if( currentDrink ){
            return (<Drink drink={currentDrink} {...routeProps}/>) 
          }
          else{
            return ( <NoMatch error="The id of the drink doesn't exist!"/> );
          }
        }}
        />
        <Route exact path="/" />
        <Route render={() => <NoMatch error="This route doesn't exist!"/> } />
      </Switch>
      
     </div>
   )
  }
}

export default App;