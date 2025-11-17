import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import { Landing, Collection, ProductDetail, About, Contact, CartPage } from './components/Pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}> 
          <Route path="/" element={<Landing />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
