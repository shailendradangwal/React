import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className='bg-orange-600 text-white text-3xl p-4'>Hi <span className='uppercase'>{userid}</span></div>
    )
}

export default User
