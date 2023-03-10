import React, { useState } from 'react'

export const Query = ({ setUserFound }) => {

  const [email, setEmail] = useState("")

  const getUser = () => {
    fetch(`http://localhost:4001/api/users/${email}`).then((res) => {
      res.json().then((res) => {
        setUserFound(res.data)
      })
    })
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="self-center text-[#EB455F] text-4xl font-black">Consulta</h1>
      <div className="flex font-bold text-[#2B3467] gap-3 p-2 text-base">
        <span>Email</span>
        <input type="email" className="w-2/3" onChange={(e) => { setEmail(e.target.value) }} />
      </div>
      <div className="self-center p-2">
        <button className="text-base text-[#FCFFE7] rounded-md p-1 bg-[#2B3467]" onClick={getUser}>Consultar</button>
      </div>
    </div>
  )
}
