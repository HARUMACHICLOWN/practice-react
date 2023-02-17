import React from 'react'
import "../style.css"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className = "header">
        <div className='redir'>
            <Link to="/login">
                <h1 className='title'>Логин</h1>
            </Link>
            <Link to="/register">
                <h1 className='title'>Регистрация</h1>
            </Link>
            <Link to="/">
                <h1 className='title'>Главная</h1>
            </Link>
        </div>
    </div>
  )
}

export default Header