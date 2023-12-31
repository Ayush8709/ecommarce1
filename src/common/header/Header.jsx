import React from 'react'
import Head from './Head'
import Search from './Search'
import Navbar from './Navbar'
import './Header.css'

const Header = ({cartItem}) => {
  return (
   <>
 <Head />
 <Search cartItem={cartItem} />
 <Navbar />
   </>
  )
}

export default Header
