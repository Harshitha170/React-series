import { useState } from 'react'

import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1>Learn aboutt redux toolkit</h1>
   <AddTodo />
   <Todos />
    </>
  )
}

export default App
