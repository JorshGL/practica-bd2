import React from 'react'

export const Inputs = () => {
  return (
    <div className="flex flex-col p-8 gap-3">
    <h1 className="self-center text-[#EB455F] text-4xl font-black">Registro</h1>
    <div className="flex flex-col font-bold text-[#2B3467] gap-3 text-base">
      <div className="flex gap-2 items-center">
        <span className="text-base">Email</span>
        <input type="email" className="w-1/3" />
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-base">Nombre</span>
        <input type="text" className="w-1/3"/>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-base">Telefono</span>
        <input type="text" className="w-1/3"/>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-base">Fecha de nacimiento</span>
        <input type="date" className="text-black font-normal"/>
      </div>
    </div>
    <div className="self-center p-2">
      <button className="text-base text-[#FCFFE7] rounded-md p-1 bg-[#2B3467]">Enviar</button>
    </div>
  </div>
  )
}
