import React from 'react'
import { useState } from 'react'

export const Inputs = () => {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [date, setDate] = useState("")
  const [user, setUser] = useState({})

  const manejarEmail = (email) =>{
    setEmail(email)
    setUser({...user, email: email})
  }
  const manejarName = (name) =>{
    setName(name)
    setUser({...user, name: name})
  }
  const manejarNumber = (number) =>{
    setNumber(number)
    setUser({...user, number: number})
  }
  const manejarDate = (date) =>{
    setDate(date)
    setUser({...user, date: date})
  }


  const handleUser = () => {
  
    console.log(user) // Por fin logré que guardara en el user

    fetch('http://localhost:4001/api/users/', {method: 'POST', body: JSON.stringify(user)}).then(() => {
      console.log("Guardado")
    }) // Esto creo que es el problema
    
  }

  return (
    <div className="flex flex-col p-8 gap-3">
    <h1 className="self-center text-[#EB455F] text-4xl font-black">Registro</h1>
    <div className="flex flex-col font-bold text-[#2B3467] gap-3 text-base">
      <div className="flex gap-2 items-center">
        <span className="text-base">Email</span>
        <input type="email" className="w-1/3" onChange={(e) => {manejarEmail(e.target.value)}}/>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-base">Nombre</span>
        <input type="text" className="w-1/3" onChange={(e) => {manejarName(e.target.value)}}/>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-base">Telefono</span>
        <input type="text" className="w-1/3" onChange={(e) => {manejarNumber(e.target.value)}}/>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-base">Fecha de nacimiento</span>
        <input type="date" className="text-black font-normal" onChange={(e) => {manejarDate(e.target.value)}}/>
      </div>
    </div>
    <div className="self-center p-2">
      <button className="text-base text-[#FCFFE7] rounded-md p-1 bg-[#2B3467]" onClick={handleUser}>Enviar</button>
    </div>
  </div>
  )
}
