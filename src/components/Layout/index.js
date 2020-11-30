import React from 'react'
import Navbar from '../Navbar/index'

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

export default Layout
