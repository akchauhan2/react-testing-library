import React from "react";

import Login from "./Login";
import Sum from "./Sum";
import "./App.css";
function App() {
  return (
    <div>
      <Login />
      <h1 data-testid="title">Auth app</h1>
      <ul>
        <li>item-1</li>
        <li>item-2</li>
        <li>item-3</li>
      </ul>
      <Sum />
    </div>
  );
}

export default App;
