import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='container mx-auto sm:px-4 px-2 py-4'>{children}</main>
      <Footer />
    </>
  )
}
