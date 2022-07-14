import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { workData } from './../components/WorkData'

const prefix = '/nextportfolio' || ''

const portfolio = () => {
  return (
    <div className='lg:container mx-auto '>
      <h1 className='h1'>portfolio</h1>
      <div className='grid-3'>
        {workData.map((data, i) => (
          <Link href={data.link} key={i}>
            <a className='p-2 shadow-sm hover:shadow-md rounded-md hover:underline text-indigo-600 border bg-gray-50'>
              <Image src={prefix + data.poster} alt={data.title} width={4} height={3} layout={'responsive'} quality={20} className='rounded-md md:scale-125 hover:md:scale-100 duration-500' />
              <p className="h3">{data.title}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default portfolio