import React from 'react'
import { Link } from 'react-router-dom'
// import Dashboard from './Dashboard'

const Logout = (props) => {
  props.handleLogout()
  props.history.push('/')
 
 

  return (
    <div className='App'>
      <h1> You have been Logged Out </h1>
      {/* <button className='Link' onClick={handleLogout }>
            Log Out
          </button> */}
      <Link className='Link' to='/'>
        Log In
      </Link>
    </div>
  )
}

export default Logout
