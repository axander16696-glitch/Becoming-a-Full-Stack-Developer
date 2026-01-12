import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Today from './Today'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Today></Today>


    </>
  )
}

export default App
