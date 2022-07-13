import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const contact = () => {
  const dataItems = [
    {
      'name': 'Linkedin',
      'link': 'https://www.linkedin.com/in/shahul-hameed-10/',
      'path': 'M14,19h4v15h-4V19z M15.988,17h-0.022C14.772,17,14,16.11,14,14.999C14,13.864,14.796,13,16.011,13 c1.217,0,1.966,0.864,1.989,1.999C18,16.11,17.228,17,15.988,17z M35,24.5c0-3.038-2.462-5.5-5.5-5.5 c-1.862,0-3.505,0.928-4.5,2.344V19h-4v15h4v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8h4C35,34,35,24.921,35,24.5z',
      'color': 'bg-[#0078d4]'
    },
    {
      'name': 'Gmail',
      'link': 'mailto:shahuldev22@gmail.com',
      'path': 'M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z M12.074,17.488C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512 L18.586,24L12.074,17.488z',
      'color': 'bg-red-500'
    },
    {
      'name': 'Twitter',
      'link': 'https://twitter.com/shahuluiux',
      'path': 'M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3 c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6 c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057 c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2 c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13 C34.95,18.818,35.342,18.104,36,17.12',
      'color': 'bg-sky-500'
    },
    {
      'name': 'Facebook',
      'link': 'https://www.facebook.com/shahuluiux/',
      'path': 'M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z',
      'color': 'bg-blue-500'
    },
    {
      'name': 'Instagram',
      'link': 'https://www.instagram.com/graphic_designer_iz/',
      'path': 'M 13.5 6 C 9.3754991 6 6 9.3754991 6 13.5 L 6 34.5 C 6 38.624501 9.3754991 42 13.5 42 L 34.5 42 C 38.624501 42 42 38.624501 42 34.5 L 42 13.5 C 42 9.3754991 38.624501 6 34.5 6 L 13.5 6 z M 31.5 12 L 34.5 12 C 35.33 12 36 12.67 36 13.5 C 36 14.33 35.33 15 34.5 15 L 31.5 15 C 30.67 15 30 14.33 30 13.5 C 30 12.67 30.67 12 31.5 12 z M 24 18 C 27.331479 18 30 20.668523 30 24 C 30 27.331477 27.331479 30 24 30 C 20.668521 30 18 27.331477 18 24 C 18 20.668523 20.668521 18 24 18 z M 9 20 L 15.953125 20 C 15.348605 21.207689 15 22.56318 15 24 C 15 28.952794 19.047202 33 24 33 C 28.952798 33 33 28.952794 33 24 C 33 22.56318 32.651395 21.207689 32.046875 20 L 39 20 L 39 34.5 C 39 37.003499 37.003499 39 34.5 39 L 13.5 39 C 10.996501 39 9 37.003499 9 34.5 L 9 20 z',
      'color': 'bg-orange-700 p-1'
    }
  ]
  return (
    <>
      <h1 className='text-4xl text-indigo-600 capitalize font-bold text-center pb-4'>contact me</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-center '>
        <div className='w-1/2 mx-auto'>
          <Image src='/vercel.svg' width={4} height={3} alt='logo' layout={'responsive'}/>
        </div>
        <div>
          <h2 className='text-3xl text-indigo-600 capitalize font-bold text-center py-4'>get in touch</h2>
          <p className='lg:text-xl text-lg font-medium py-3'>I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with UI|UX Designing, Frontend Development, Illustrations.</p>
          <div className='py-4 flex justify-center gap-4'>
            {dataItems.map((data) => (
              <Link href={data.link} key={data.name}>
                <a target='_blank' title={data.name}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px" className={`hover:bg-indigo-600 rounded-full fill-white cursor-pointer ${data.color}`}><path d={data.path} /></svg>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default contact