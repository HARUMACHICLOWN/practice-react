import React from "react";
import { Header, Home } from './components'
import { Login, Register } from "./pages"
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" exact element = { <Home/> } />
        <Route path = "login/" exact element = { <Login/> } />
        <Route path = "register/" exact element = { <Register/> }/>
      </Routes>
    </div>
  );
}

export default App;
