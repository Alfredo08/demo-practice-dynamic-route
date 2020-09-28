import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

const testHobbies = [{
  name : "Dance"
},
{
  name : "Sing"
}]

// Smoke test
it ('Should load the App component correctly', () => {
  let container = document.createElement( 'div' );
  ReactDOM.render( <App hobbies={testHobbies} />, container );
  ReactDOM.unmountComponentAtNode( container );
});


// Snapshot test
it ( 'Renders the virtual App in the UI correctly', () => {
  let container = renderer.create( <App hobbies={testHobbies} />).toJSON();
  expect( container ).toMatchSnapshot();
});