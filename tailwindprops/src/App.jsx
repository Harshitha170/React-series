import { useState } from 'react'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"Hitha",
    age: 23
  }
  return (
    <>
   <h1 className='bg-green-300 text-center text-black p-4 rounded-xl w-fit mx-auto'>Tailwind Test</h1>
   <Card username="Harshitha" btnText="click me" /* someObj={myObj} */ />
   <Card username="Hitha J" btnText="visit me"/>
    </>
  )
}

export default App
