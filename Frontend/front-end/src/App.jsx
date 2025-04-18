import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"
import ViewPickups from './components/ViewPickups'
import Home from './components/Home'
import ViewSinglePickup from './components/ViewSinglePickup'
import AddPickupForm from './components/AddPickUpForm'
import EditPickupForm from './components/EditPickupForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Routes>
    <Route path="/" element={<Home/>} />
     <Route path="/viewpickups" element={<ViewPickups/>} />
     <Route path="/viewpickups/:id" element={<ViewSinglePickup/>} />
     <Route path="/addpickupform" element={<AddPickupForm/>} />
     <Route path="/editpickupform/:id" element={<EditPickupForm/>} />
     </Routes>
    </>
  )
}

export default App
