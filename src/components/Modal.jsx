import React from 'react'
import "./Modal.css"

const Modal = ({ children, handleToggle }) => {
  return (
    <div className="Modal-backdrop">
        <div className="Modal p-4 max-w-[480px] fixed top-[35%] left-[35%] bg-slate-300 rounded-lg">
            {children}
            <button onClick={handleToggle} className="mt-10 p-4 border-solid border-2 border-sky-2 rounded-lg bg-gray-400 hover:bg-gray-500 text-white">Close</button> 
        </div>
    </div>
  )
}

export default Modal
