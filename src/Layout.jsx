import React from "react"
import Navbar from "./component/Navbar"
import { Outlet } from "react-router-dom"
import UserContextProvider from "./context/UserContextProvider"
import Footer from "./component/Footer";

export default function Layout() {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Outlet />
        <Footer/>
      </UserContextProvider>
    </>
  );
}