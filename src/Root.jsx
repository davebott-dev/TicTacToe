import { useState } from 'react';
import {Outlet} from 'react-router-dom';
import './App.css'

function Root() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="header">
        <h1>Tic-Tac-Toe</h1>
      </div>
      <Outlet/>
    </>
  )
}

export default Root;
