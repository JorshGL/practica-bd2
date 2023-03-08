import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {Inputs, Query, Results} from "./components"

function App() {

  return (
    <div className="grid grid-cols-2 grid-rows-2 w-screen h-screen bg-[#BAD7E9] text-2xl">
      <Inputs></Inputs>
      <Results></Results>
      <Query></Query>
    </div>
  );
}

export default App;
