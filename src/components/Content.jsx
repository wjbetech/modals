import React from 'react'
import "./Content.css"

const Content = ({ modalState, handleToggle }) => {
  return (
    <div className="Content p-10 mt-10 border-4 w-[80%] m-auto">
        <h1 className="title text-[40px] mb-5">Modals</h1>
        <button onClick={!modalState ? handleToggle : ""} className={`${modalState ? "cursor-not-allowed opacity-25 hover:bg-slate-400" : ""} btn p-4 rounded-md bg-slate-400 text-white hover:bg-slate-500`}>Open Modal</button>
    </div>
  )
}

export default Content

// btn p-4 rounded-md bg-slate-400 text-white hover:bg-slate-500