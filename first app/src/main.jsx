import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import React from 'react'

// function Myapp(){
//   return(
//     <div>
//       <h1>Custom App | chai</h1>
//     </div>
//   )
// }


const anotherUser = 'chai aur react'


// const ReactElement = {
//   type : "a",
//   props : {
//       href : "https://google.com",
//       target: "_blank"
//   },
//   children :"click me to visit google"
// }


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)


// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
