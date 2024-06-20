import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {

  return (
    <div className='main-container'>
      <CreateTodo />
    </div>
  )
}

export default App
