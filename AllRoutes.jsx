import React from 'react'
import {Route,Routes} from "react-router-dom"
import Product from '../pages/Product'
import Home from '../pages/Home'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Product/>}></Route>

    </Routes>
  )
}
