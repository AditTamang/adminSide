import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/admin/dashboard/Dashboard'
import Layout from './components/admin/Layout'
import Product from './pages/admin/dashboard/product/Product'
import TrialLayout from './pages/admin/user/TrialLayout'
import Greetings from './pages/admin/user/Greetings'
import Login from './pages/admin/auth/Login'
import ProductCreate from './pages/admin/dashboard/product/ProductCreate'
import UpdateProduct from './pages/admin/dashboard/product/UpdateProduct'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Hello world</h1>} />

          <Route element={<Layout />} >
            <Route path='/admin/' element={<Dashboard />} />
            <Route path='/admin/product' element={<Product />} />
            <Route path="admin/createProduct" element={<ProductCreate />} />
            <Route path="admin/updateProduct/:id" element={<UpdateProduct />} />
          </Route>

          <Route path='/admin/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App