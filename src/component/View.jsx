import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

export default function View() {
 const [user,setUser]=useState([])

 const {id}=useParams()

  useEffect(()=>{
   newdata()
  },[])

  const newdata=async()=>{
    const response=await axios.get(`http://localhost:3000/data/${id}`)
    setUser(response.data[0])
  }

  return (
    <div className="w-[300px] rounded-md border card">
      <img
        src={`http://localhost:3000/${user.filename}`}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">Product_id:-{user.id}</h1>
        <h1 className="text-lg font-semibold">Product_Name:-{user.product_name}</h1>
        <h1 className="text-lg font-semibold">Product_Type:-{user.product_type}</h1>
        <h1 className="text-lg font-semibold">Product_Rating:-{user.product_rating}</h1>
        <h1 className="text-lg font-semibold">Product_Rating:-{user.product_price}</h1>
        
        <Link
          type="button"
          to="/"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Home Page
        </Link>
      </div>
    </div>
  )
}
