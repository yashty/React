import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter >= 20) {
      alert(`Value exceeded`);
    } else {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter <= 0) {
      alert(`Negative Value `);
    } else {
      
      setCounter(counter - 1)
    }
  }

  return (
     <>
     <h1>chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add Value</button>
     <br />
     <br />
     <button
     onClick={removeValue}
     >Remove Value</button>
     </>
  )
}

export default App
