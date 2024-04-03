import React, { useContext, useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";
import UserContext from "../../context/UserContext";

export default function MainHome() {
  const [user, setUser] = useState([])
// console.log(user)

  useEffect(()=>{
    fetchdata();
    cartInfo()
  },[])

console.log(user)

  const {setCount}=useContext(UserContext)
  
  const cartInfo=async()=>{
    const response=await axios.get("http://localhost:3000/alldata")
    setCount(response.data.length)
   }
  
  const fetchdata = async () => {
    const response = await axios.get("http://localhost:3000/getdata");
    setUser(response.data);
  };

  const [product_name,setProduct_name]=useState('')

  const serachbar=async()=>{
    const response=await axios.get(`http://localhost:3000/inpdata/${product_name}`)
    setUser(response.data)
  }

   const product1=async()=>{
    const response=await axios.get(`http://localhost:3000/product1`)
    setUser(response.data)
   }

  const product2=async()=>{
    const response=await axios.get(`http://localhost:3000/product2`)
    setUser(response.data)
  }

  const product3=async()=>{
    const response=await axios.get(`http://localhost:3000/product3`)
    setUser(response.data)
  }
  const product4=async()=>{
    const response=await axios.get(`http://localhost:3000/product4`)
    setUser(response.data)
  }

  const brand1=async()=>{
    const response=await axios.get(`http://localhost:3000/brand1`)
    setUser(response.data)
  }
  const brand2=async()=>{
    const response=await axios.get(`http://localhost:3000/brand2`)
    setUser(response.data)
  }
  const brand3=async()=>{
    const response=await axios.get(`http://localhost:3000/brand3`)
    setUser(response.data)
  }
  const brand4=async()=>{
    const response=await axios.get(`http://localhost:3000/brand4`)
    setUser(response.data)
  }

      const adddata=async(data)=>{
        await axios.post("http://localhost:3000/add",{
        product_name:data.product_name,
        product_type:data.product_type,
        product_rating:data.product_rating,
        product_price:data.product_price
      }) 
      fetchdata();
      cartInfo();
    }
    
  return (
    <>
      <div id="mainpage">
        <aside className="fixed flex h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">
          <a href=""></a>
          <div className="mt-6 flex flex-1 flex-col justify-between">
            <nav className="-mx-3 space-y-6 ">
              <div className="space-y-3 ">
                <label className="px-3 text-xs font-semibold uppercase text-white">
                  Search By Name
                </label>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2  "
                  // href="#"
                >
                  <form class="max-w-md mx-auto">
                    <label
                      for="default-search"
                      class="mb-2 text-sm font-medium text-gray-900 sr-only "
                    >
                      Search
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          class="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500"
                        placeholder="Search Product"
                        value={product_name}
                        onChange={(e)=>setProduct_name(e.target.value)}
                      />
                    </div>
                  </form>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors "
                  // href="#"
                >
                   <button
                        type="submit"
                        class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative left-5"
                        onClick={serachbar}
                      >
                        Search
                      </button>
                   <button
                        type="submit"
                        class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative left-5 mx-5"
                        onClick={fetchdata}
                      >
                        All Data
                      </button>
                </a>
              </div>
              <div className="space-y-3 ">
                <label className="px-3 text-xs font-semibold uppercase text-white">
                  Price
                </label>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={product1}
                >
                  <span className="mx-2 text-sm font-medium">
                    2000 Rs- 3000 Rs
                  </span>
                </button>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={product2}
                >
                  <span className="mx-2 text-sm font-medium">
                    3000 Rs-5000 Rs
                  </span>
                </button>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={product3}
                >
                  <span className="mx-2 text-sm font-medium">
                    5000 Rs-7000 Rs
                  </span>
                  </button>

                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700" 
                  onClick={product4}>
                  <span className="mx-2 text-sm font-medium">
                     Above of Rs 7000
                  </span>
                </button>
              </div>

              <div className="space-y-3 ">
                <label className="px-3 text-xs font-semibold uppercase text-white">
                  Brand
                </label>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={brand1}
                >
                  <span className="mx-2 text-sm font-medium">Puma</span>
                </button>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={brand2}
                >
                  <span className="mx-2 text-sm font-medium">Adidas</span>
                </button>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                 onClick={brand3}
                >
                  <span className="mx-2 text-sm font-medium">WoodLand</span>
                  </button>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={brand4}
                >
                  <span className="mx-2 text-sm font-medium">Samsung</span>
                </button>
              </div>
            </nav>
          </div>
        </aside>
      </div>


      <div id="cardpage">
        {user.map((data) => (
          <div className="w-[300px] rounded-md border">
            <img
              src={`http://localhost:3000/${data.filename}`}
              className="h-[200px] w-full rounded-md object-cover"
            />
            <div className="p-4">
              {/* <h1 className="text-lg font-semibold">Product_id:-{data.id}</h1> */}
              <h1 className="text-lg font-semibold">
                Product_Name:-{data.product_name}
              </h1>
              <h1 className="text-lg font-semibold">
                Product_Type:-{data.product_type}
              </h1>
              <h1 className="text-lg font-semibold">
                Product_Rating:-{data.product_rating}
              </h1>
              <h1 className="text-lg font-semibold">
                Product_Price:-{data.product_price}
              </h1>

              <button
                type="submit"
                onClick={()=>adddata(data)}
                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                 Add to Card
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}