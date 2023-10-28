import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  const increaseCounter = () => {
    if(counter < 20){
      counter = counter + 1;
      setCounter(counter)
    }
    else{
      console.log("STOP INCREASING!!!");
    }
  }
  const decreaseCounter = () => {
    if(counter > 0){
    counter = counter - 1;  
    setCounter(counter)
    }
    else{
      console.log("STOP DECREASING!!!");
    }
  }

  return (
    <>
      <h1>Aao Counter Banaye!!!</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={increaseCounter}>Add Value {counter}</button>&nbsp;&nbsp;
      <button onClick={decreaseCounter}>Remove Value {counter}</button>
    </>
  )
}

export default App
