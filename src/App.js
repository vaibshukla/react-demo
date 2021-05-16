import React from 'react'
import {render} from 'react-dom';
import Pet from './Pet'


const App = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
      <Pet name="Luna"  animal="Dog" breed="Havenese" />
      <Pet name="Luna"  animal="Dog" breed="Havenese" />
      <Pet name="Luna"  animal="Dog" breed="Havenese" />
    </div>
  );
};

render(<App name="Addopt Pet Client 1 " />, document.getElementById("root"));
