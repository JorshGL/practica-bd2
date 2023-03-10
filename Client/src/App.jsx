import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {Inputs, Query, Results} from "./components"

function App() {

  const [userFound, setUserFound] = useState({})

  return (
    <div className="grid grid-cols-2 grid-rows-2 w-screen h-screen bg-[#BAD7E9] text-2xl">
      <Inputs></Inputs>
      <Results userFound={userFound}></Results>
      <Query setUserFound={setUserFound}></Query>
    </div>
  );
}

export default App;
