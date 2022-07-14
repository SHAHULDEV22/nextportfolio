import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const prefix = '/nextportfolio' || ''


export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href={prefix + '/favicon.ico'} />
      </Head>
      <Header />
      <main className='sm:px-4 px-2 py-4'>{children}</main>
      <Footer />
    </>
  )
}
