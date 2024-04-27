import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar, Sidebar } from '../components'

const Home = () => {
  return (
   <>
    <Navbar/>
      <Sidebar/>
      <Outlet/>
      <Footer/>
   </>
     
      
  )
}

export default Home