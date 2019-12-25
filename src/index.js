import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Helloworld() {
  return <div> Hello world</div>;
}
ReactDOM.render(<Helloworld />, document.getElementById("mountNode"));
