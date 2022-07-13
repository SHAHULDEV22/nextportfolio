import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-black/80 text-center py-6 capitalize'>
      copyright © {(new Date().getFullYear())} designed &#38; built by<Link href='https://shahuluiux.com'><a className='pl-1 uppercase underline text-indigo-600 font-medium'>shahuluiux</a></Link>.
    </footer>
  )
}

export default Footer