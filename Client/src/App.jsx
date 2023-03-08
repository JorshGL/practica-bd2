import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-2 grid-rows-2 w-screen h-screen bg-rose-700 text-3xl">
      <div className="flex flex-col p-8">
        <h1 className="self-center">Registro</h1>
        <div>
          <span>Email</span>
        </div>
        <div>
          <span>Nombre</span>
        </div>
        <div>
          <span>Telefono</span>
        </div>
        <div>
          <span>Fecha de nacimiento</span>
        </div>
        <div>
          <button>Enviar</button>
        </div>
      </div>
      <div className="row-span-2"></div>
      <div></div>
    </div>
  );
}

export default App;
