//import { useState } from 'react'
import Card from './components/card'

import './App.css'

function App() {
  let myObj = {
    username : "SD",
    age : 43
  }


  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>TAILWIND</h1>

      <Card studentname = "Lavitra" btnText="Meet Lavitra"/>
      <Card studentname = "Vritti"/>
    </>
  )
}

export default App
