import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiData from './Components/FetchData/ApiData'
import Test from './Components/FetchData/Test'
import TableData from './Components/TableData/TableData'
import Paginations from './Components/Pagination/Paginations'

function App() {
  

  return (
   <>
   {/* 
   <Test/>
   <TableData/> */}
   <Paginations/>
   <ApiData/>
   </>
  )
}

export default App
