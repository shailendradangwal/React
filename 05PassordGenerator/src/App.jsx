import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordReference = useRef(null)

  const passwordGenerator = useCallback(() => {

      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) str += "0123456789"
      if(charAllowed) str += "!@#$%^&*()~{}[]`"

      for (let i=1; i<=length; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)

      }

      setPassword(pass)

    

    }, [length, numberAllowed, charAllowed, setPassword])

const copyPasswordToClipboard = useCallback(() => {
  passwordReference.current?.select()
  passwordReference.current?.setSelectionRange(Math.random(0), (Math.random(0,100)+5))
  window.navigator.clipboard.writeText(password)
},[password])

    useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
  
      <div className="w-full max-w-d rounded-lg mx-auto shadow-lg px-4 my-8 text-orange-500 ">
        <h1 className="text-4xl text-center text-white mb-4">Password Generator</h1>
        <div className="flex shadow-lg overflow-hidden mb-4 bg-red-500 rounded-lg px-5 py-5 w-50">
        <input type='text' ref={passwordReference} value={password} className='outline-none rounded-lg w-full py-1 px-3' placeholder='Password' readOnly>
        </input>
        <button type="button" onClick={copyPasswordToClipboard} className='outline-none w-36 rounded-lg shrink-0 bg-orange-900 colpr-blue'>COPY</button>
        </div>
        <div className='flex text-sm gap-x-2 py-3'>
          <div className="flex flex-center gap-x-1">
            <input type='range' min ="{6}" max={100} value={length} className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length : {length}</label>
          </div>

          <div className="flex flex-center gap-x-1">
            <input type='checkbox' defaultChecked={numberAllowed} id="numberInput"
            onChange={(e) => {setNumberAllowed((prev) => !prev)}}/>
            <label htmlFor='numberInput'>Number</label>
          </div>

          <div className="flex flex-center gap-x-1">
            <input type='checkbox' defaultChecked={charAllowed}  id="characterInput"
            onChange={(e) => {setCharAllowed((prev) => !prev)}}/>
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
  )
}

export default App
