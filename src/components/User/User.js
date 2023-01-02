import React from 'react'
import { useParams } from 'react-router-dom'
import "./User.css"
export default function User() {
  
    let { userId } = useParams();
    
    return (
    <div className='user'>User {userId}</div>
  )
}
