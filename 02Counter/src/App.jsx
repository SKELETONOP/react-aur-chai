import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5

  // const addValue = ()=>{
  //   if (counter < 20){
  //   counter = counter + 1
  //   setCounter(counter)
  //   console.log("Clicked");
  // }else{
  //   alert("Hit the Highest Point")
  // }
  // }

  //interview question
  const addValue =() => {
    // counter = counter +1
    setCounter (prevCounter => prevCounter+1)
    setCounter (prevCounter => prevCounter+1)
    setCounter (prevCounter => prevCounter+1)
    setCounter (prevCounter => prevCounter+1)
  }

  const removeValue = ()=>{
    if(counter > 0){
    counter = counter - 1
    setCounter(counter)
    console.log("Value removed");}
    else{
      alert("we can't go less then 0 ")
    }
  }

  return (
    <>
     <h1>Chai Aur React</h1>
     <h2>Counter  : {counter}</h2>
     <button
     onClick={addValue}
     >Add Value</button><br></br>
     <button
     onClick={removeValue}
     >Remove Value</button>
    </>
  )
}

export default App
