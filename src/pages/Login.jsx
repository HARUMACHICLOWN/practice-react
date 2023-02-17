import React from 'react'
import Header from '../components/Header'

function Login() {
  return (
    <div>
        <Header/>
       <h1>Login</h1>
       <form className="form">
        <input placeholder='Name'/>
        <input placeholder='Password'/>
        <button>Registration</button>
       </form>
      
    </div>
  )
}

export default Login