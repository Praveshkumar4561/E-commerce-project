import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarMain from './component/client/NavbarMain'
import UserContextProvier2 from './context/UserContextProvider2'

export default function User() {
  return (
    <UserContextProvier2>
     <NavbarMain/>
     <Outlet/> 
    </UserContextProvier2>
  )
}
