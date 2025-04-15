import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [color, setColor] = useState("White")

 
  
//   return (
   
//     <div
//     className="w-full h-screen duration-200 "
//     style={{ backgroundColor: color }}
//   >
//     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
//       <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-xl '>
//         <button className='outline-none px-4 rounded-b-full shadow-lg'
//         style={{background:"red"}}
//         onClick={()=> setColor("red")}
//         >Red</button>
//         <button className='outline-none px-4 rounded-b-full shadow-lg'
//         style={{background:"green"}}
//         onClick={()=> setColor("green")}
//         >Green</button>
//         <button className='outline-none px-4 rounded-b-full shadow-lg'
//         style={{background:"blue"}}
//         onClick={()=> setColor("blue")}
//         >Blue</button>
//         <button className='outline-none px-4 rounded-b-full shadow-lg'
//         style={{background:"olive"}}
//         onClick={()=> setColor("olive")}
//         >Olive</button>
//         <button className='outline-none px-4 rounded-b-full shadow-lg'
//         style={{background:"grey"}}
//         onClick={()=> setColor("grey")}
//         >Grey</button>
//         <button className='outline-none px-4 rounded-b-full shadow-lg text-black'
//         style={{background:"Yellow"}}
//         onClick={()=> setColor("yellow")}
//         >Yellow</button>
//         <button className='outline-none px-4 rounded-b-full shadow-lg text-black'
//         style={{background:"Pink"}}
//         onClick={()=> setColor("pink")}
//         >Pink</button>
//         <button className='outline-none px-4 rounded-b-full shadow-lg'
//         style={{background:"Purple"}}
//         onClick={()=> setColor("purple")}
//         >Purple</button>
//         <button className='outline-none px-4 rounded-b-full shadow-lg text-black'
//         style={{background:"Lavender"}}
//         onClick={()=> setColor("lavender")}
//         >Lavender</button>
//         <button className='outline-none px-4 rounded-b-full shadow-lg text-black'
//         style={{background:"White"}}
//         onClick={()=> setColor("white")}
//         >White</button>
//         <button className='outline-none px-4 rounded-b-full shadow-lg '
//         style={{background:"Black"}}
//         onClick={()=> setColor("black")}
//         >Black</button>
//       </div>
//     </div>
//   </div>
    
//   )
// }



// *******************************better approach (dry Code) ******************************

function App() {
  const [color, setColor] = useState("white")

  const colors = [
    { name: "Red", value: "red" },
    { name: "Green", value: "green" },
    { name: "Blue", value: "blue" },
    { name: "Olive", value: "olive" },
    { name: "Grey", value: "grey" },
    { name: "Yellow", value: "yellow" },
    { name: "Pink", value: "pink" },
    { name: "Purple", value: "purple" },
    { name: "Lavender", value: "lavender" },
    { name: "White", value: "white" },
    { name: "Black", value: "black" },
  ]

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-xl'>
          {colors.map((col, index) => (
            <button
              key={index}
              className="outline-none px-4 py-2 rounded-b-full shadow-lg"
              style={{ background: col.value, color: col.value === "white" || col.value === "yellow" || col.value === "lavender" ? "black" : "white" }}
              onClick={() => setColor(col.value)}
            >
              {col.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
