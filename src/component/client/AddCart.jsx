import React, { useContext, useEffect, useState } from 'react'
import { Trash, Heart } from 'lucide-react'
import axios from 'axios'
import UserContext from '../../context/UserContext'

export default function AddCart() {
  const [user,setUser]=useState([])
  
  let [amount,setAmount]=useState([])

     useEffect(()=>{
      alldata()
     },[])

      const {setCount}=useContext(UserContext)

     const alldata=async()=>{
      const response=await axios.get("http://localhost:3000/alldata")
      setUser(response.data)
      setCount(response.data.length)
     }
     alldata()
 
        const deletecart=async(id)=>{
          await axios.delete(`http://localhost:3000/deletecarts/${id}`,user)
        }       
  
  return (
    <>
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your cart</h2>
      <p className="mt-3 text-sm font-medium text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius repellat ipsam, sit
        praesentium incidunt.
      </p>
      <ul className="flex flex-col divide-y divide-gray-200">
        {user.map((data) => (
            <div className="flex w-full space-x-2 sm:space-x-4">
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                   <div>
                    <span>Product_name:-{data.product_name}</span><br />
                    <span>Product_type:-{data.product_type}</span><br />
                    <span>Product_rating:-{data.product_rating}</span><br />
                    <span>Product_price:-{data.product_price}</span>
                   </div>
                  </div>
                  <div className="text-right">
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button type="button" className="flex items-center space-x-2 px-2 py-1 pl-0">
                    <Trash size={16} />
                    <button 
                    onClick={()=>deletecart(data.id)}
                    >Remove</button>
                  </button>
                  <button type="button" className="flex items-center space-x-2 px-2 py-1">
                    <Heart size={16} />
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
        ))}
      </ul>
      <div className="space-y-1 text-right">
         <p>
          Total amount:
          <span className="font-semibold">₹48,967</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back to shop
        </button>
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Checkout
        </button>
      </div>
    </div>
    </>
  )
}
