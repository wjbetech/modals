import React from 'react'
import "./Modal.css"
import { createPortal } from "react-dom"

const Modal = ({ handleToggle, children }) => {
  return (
    <div className="Modal-backdrop">
        {createPortal(
            <div className="Modal p-4 w-[50%] fixed top-[35%] left-[30%] bg-slate-300 rounded-lg">
                {children}
                <button onClick={handleToggle} className="mt-10 p-4 border-solid border-2 border-sky-2 rounded-lg bg-gray-400 hover:bg-gray-500 text-white">Close</button> 
            </div>,
            document.body
        )}
    </div>
  )
}

export default Modal
