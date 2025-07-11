import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact-Us/Contact-Us.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/GIthub/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout />,
//     children:[
//       {
//         path:"",
//         element: <Home />
//       },{
//         path:"About",
//         element: <About />
//       },{
//         path:"Contact-us",
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route 
      loader={githubInfoLoader} 
      path="github" 
      element={<Github />} 
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
