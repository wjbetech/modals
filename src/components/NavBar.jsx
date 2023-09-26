import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="flex justify-between p-6 mb-4 shadow-md">
        <div className="left text-xl font-bold">
            <h1>Modals Demo</h1>
        </div>
        <div className="right font-light">
            @wjbetech
        </div>
    </nav>
  )
}

export default NavBar
