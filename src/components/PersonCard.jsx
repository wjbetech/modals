import React from 'react'
import "./PersonCard.css"

const PersonCard = ({ name, email, modalState }) => {
  return (
    <div className={`p-4 bg-slate-200 m-2`}>
        <h1 className="font-bold text-xl">{name}</h1>
        <p>{email}</p>
        <button className="mt-4 px-4 py-2 bg-sky-400 hover:bg-sky-500 text-white rounded-lg">View</button>
    </div>
  )
}

export default PersonCard
