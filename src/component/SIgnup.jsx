import React, { useState } from 'react' 
import { ArrowRight} from 'lucide-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import Image from '../uploads/Image'

export default function Signup() {

  // const [user,setUser]=useState({
  //   product_name:"",
  //   product_type:"",
  //   product_rating:"",
  //   product_price:""
  // })
  // const {product_name,product_type,product_rating,product_price}=user;

  // const handleSubmit=async()=>{
  //   await axios.post('http://localhost:3000/submit',user)
  // }

  // const onInputChange=async(e)=>{
  //   setUser({...user,[e.target.name]:e.target.value})
  // }

  
  const Navigation=useNavigate()

  const [product_name,setProduct_name]=useState('')
  const [product_type,setProduct_type]=useState('')
  const [product_rating,setProduct_rating]=useState('')
  const [product_price,setProduct_price]=useState('')
  const [image,setImage]=useState(null)

  const onSubmit=async(e)=>{
    e.preventDefault()
    const user=new FormData()
    user.append('image',image)
    user.append('product_name',product_name)
    user.append('product_type',product_type)
    user.append('product_rating',product_rating)
    user.append('product_price',product_price)
    
    try {
      await axios.post('http://localhost:3000/add_items',user,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      })
      Navigation("/admin")
    } catch (error) {
      console.log(error)
       alert("Failed to upload product")
    }
  }
 
  

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">New Product add</h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{' '}
              <a
                // href="#"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
              Product Add
              </a>
            </p>
            <form action="#" method="POST" className="mt-8" onSubmit={onSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Product Name{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Product Name"
                      id="product_name"
                      name='product_name'
                      value={product_name}
                      onChange={(e)=>setProduct_name(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    {' '}
                    Product Type{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Product Type"
                      id="product_type"
                      name='product_type'
                      value={product_type}
                      onChange={(e)=>setProduct_type(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Product Rating{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Product Rating"
                      id="product_rating"
                      name='product_rating'
                      value={product_rating}
                      onChange={(e)=>setProduct_rating(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Product Price{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Product Price"
                      id="product_price"
                      name='product_price'
                      value={product_price}
                      onChange={(e)=>setProduct_price(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Upload image{' '}
                    </label>
                  </div>
                  <div className="mt-2">

                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="file"
                      placeholder="file upload"
                      accept='image/*'
                      id="product_price"
                   
                      onChange={(e)=>setImage(e.target.files[0])}
                    ></input>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    // onClick={handleSubmit}
                    // to="/"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Add New Product<ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
