import { useState } from 'react'


function App() {
 let [counter, setCounter] = useState(5)
  //let counter = 5

  const addValue = () => {
    if(counter < 20){
    setCounter(counter + 1)
  }
  }
  const removeValue = () => {
    if(counter > 0){
    setCounter(counter - 1)
  }
}
  return (
  <>
  <h1>React</h1>
  <h2>Counter Value: {counter}</h2>
  <button onClick={addValue}>Add Value {counter}</button>
  <br />
  <button onClick={removeValue}>remove Value {counter}</button>
  <p>footer: {counter}</p>
  </>
  )
}

export default App
