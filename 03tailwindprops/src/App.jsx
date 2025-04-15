import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myObj= {
    CardName : "Monkey NFT",
    age : "23"
  }

  let myArr = [1,2,3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-4 text-4xl'>Tailwind Test</h1>
      <Card cardName = "Monkey NFT" price = "45$" src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g" />
      <Card cardName= "Fireman NFT" price='50$' src = "https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif" />
      

    </>
  )
}

export default App
