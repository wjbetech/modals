import React from 'react'
import { useState } from "react"
import NavBar from "./components/NavBar"
import Content from "./components/Content"
import Modal from "./components/Modal"
import "./App.css"

const App = () => {

  // state setters
  const [toggleModal, setToggleModal] = useState(false)
  
  // handlers
  const handleToggle = () => {
    setToggleModal(!toggleModal)
  }

  return (
    <div className="App">
      <NavBar />
      <Content handleToggle={handleToggle} modalState={toggleModal} />
      {toggleModal ? 
        <Modal handleToggle={handleToggle}>
          <h1 className="text-xl font-bold">Modal Component</h1>
          <p>This is the Modal</p>
        </Modal>
      : ""}
    </div>
  )
}

export default App
