import React from 'react'
import Navbar from '../Navbar/index'
import Footer from '../Footer/index'

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
