import React, { useEffect } from 'react'
import { useState } from "react"
import NavBar from "./components/NavBar"
import Content from "./components/Content"
import Modal from "./components/Modal"
import "./App.css"
import PersonCard from "./components/PersonCard"
import axios from "axios"

const App = () => {

  // state setters
  const [modalState, setModalState] = useState(false)

  const [peopleData, setPeopleData] = useState([])

  // axios
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      setPeopleData(res.data);
      console.log(peopleData)
    })
    .catch((err) => {
      console.log(err)
      return null
    })
  }, [])
  
  // handlers
  const handleToggle = () => {
    setModalState(!modalState)
  }

  // mappers
  const peopleCards = peopleData.map(p => (
    <PersonCard key={p.name} name={p.name} email={p.email} />
  ))

  return (
    <div className={`App ${modalState ? "fixed inset-0 bg-black bg-opacity-75 h-full w-full" : ""}`}>
      <NavBar />
      <Content handleToggle={handleToggle} modalState={modalState} />
      <div className="grid grid-cols-2 p-6">
        {peopleCards}
      </div>
      {modalState
        ? <Modal handleToggle={handleToggle}>
            <h1 className="font-bold text-xl">Modal Title</h1>
            <p>Modal content</p>
          </Modal>
        : ""}
    </div>
  )
}

export default App
