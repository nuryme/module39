import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import UseEffect from './UseEffect'

function App() {
  const handleClick = () => {
    alert('button 1 clicked')
  }
  const handleClick2 = () => {
    alert('button 3 clicked')
  }
  const handleClick4 = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React core concepts 2</h1>
      <div>
      <button onClick={handleClick} style={{
        marginRight: '20px'
      }}>Click Me1</button>

      <button onClick={() => {
        alert('button 2 clicked')
      }} style={{
        marginRight: '20px'
      }}>Click Me2</button>

      <button onClick={() => {
        handleClick4(3)
      }} style={{
        marginRight: '20px'
      }}>Click Me4</button>

    <button onClick={handleClick2}>Click Me3</button>
      </div>


      <div>
        <Counter></Counter>
        <UseEffect></UseEffect>
      </div>
    </>

  )
}

export default App
