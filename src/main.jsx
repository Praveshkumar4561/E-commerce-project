import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout'
import Card from './component/Card'
import Signup from './component/SIgnup'
import Update from './component/Update'
import View from './component/View'
import User from './User'
import AdminSignin from './component/AdminSignin'
import Protected from './component/Protected'
import MainHome from './component/client/MainHome'
import AddCart from './component/client/AddCart'


const router= createBrowserRouter(
  createRoutesFromElements(
    <>
   <Route path='/' element={<User/>}>
    <Route path='' element={<MainHome/>}/>
    <Route path='/cart' element={<AddCart/>}/>
   </Route>

    <Route path='/admin' element={<Layout/>}>
     <Route path='' element={
      <Protected>
        <Card/>
      </Protected>
      }/>
     <Route path='/admin/signup' element={
      <Protected>
        <Signup/>
      </Protected>
     }/>
     <Route path='/admin/signin' element={<AdminSignin/>}/>
     <Route path='/admin/update/:id' element={<Update/>}/>
     <Route path='/admin/view/:id' element={<View/>}/>
    </Route>
   </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
