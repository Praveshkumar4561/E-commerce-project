import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserContextProvider2 ({children}) {
 const [count,setCount]=useState(0)

  return (
    <UserContext.Provider value={{count,setCount}}>
        {children}
    </UserContext.Provider>
  )
}
