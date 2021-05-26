import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParam from "./SearchParam";

const App = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <SearchParam />
    </div>
  );
};

render(<App name="Addopt Pet Client 1 " />, document.getElementById("root"));
