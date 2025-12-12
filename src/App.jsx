import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FormPage from './components/FormPage'
import IdCardPage from './components/IdCardPage'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<FormPage/>} />
      <Route path="/idcard" element={<IdCardPage/>} />
      <Route path="/idcard.html" element={<IdCardPage/>} />
    </Routes>
  )
}
