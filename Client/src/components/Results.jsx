import React, { useEffect } from 'react'

export const Results = ({ userFound }) => {

  useEffect(()=>{
    console.log(userFound)
  }, [userFound])

  return (
    <div className="row-span-2 bg-[#FCFFE7]">{}</div>
  )
}