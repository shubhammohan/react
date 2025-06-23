
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]= useState(15)
  //let counter=15

const addValue=()=>{
  //console.log("value added",Math.random())
 
  //counter=counter+1
  setCounter(counter+1)
  console.log('clicked',counter);
}
  const removeValue=()=>{
  setCounter(counter-1)
  }
  return (
    <>
      
      <hi>Gym aur Code</hi>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br/>

      <button onClick={removeValue}>Remove Value{counter}</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
