import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import RegistrationForm from '../Pages/RegistrationForm'


function Router() {
  return (
<Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/form" element={<RegistrationForm />} />
</Routes>
  )
}

export default Router