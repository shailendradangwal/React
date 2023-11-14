import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
import '../App.css'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }

    return (
        <div className='bg-orange-600 items-center p-5'>
            <h1 className='block items-center'>Login</h1>
            <div className='flex items-center p-5'>
            <input type='text' 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            placeholder='Name'
            className="bg-gray-50 m-2 flex items-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-6/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            {"  "}
            <input type='text'
            value={password} 
            onChange={(e) => setPassword (e.target.value)} 
            placeholder='Password'
            className="bg-gray-50 m-2 flex items-center  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-6/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className='flex justify-end px-5'>
            <button className="bg-gray-50 p-4 rounded-lg" type='button' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Login
