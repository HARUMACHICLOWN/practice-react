import React from 'react'
import Header from '../components/Header'

function Register() {
  return (
    <div>
      <Header/>
      <h1>Registration</h1>
      <form className="form">
        <input placeholder='Name'/>
        <input placeholder='Email'/>
        <input placeholder='Password'/>
        <button>Registration</button>
       </form>
    </div>
  )
}

export default Register