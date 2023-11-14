import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
import '../App.css'

function Profile() {
    const {user} = useContext(UserContext)
    if (!user)
        return <div className='bg-red-700 items-center p-5 text-white'>Please Login</div>
            
        return <div className='bg-red-700 items-center p-5 text-white capitalize'> 
        {user.userName ? "Welcome " + user.userName : "Please Provide Username"}</div>
    }   

export default Profile
