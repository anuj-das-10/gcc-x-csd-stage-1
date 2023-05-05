import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header, Navbar, AlumniComponent } from '@/components'

const alumni = () => {
  return (
    <>
      <div className='bg-black h-screen pb-4'>
        <Header />
        <Navbar />

        <div className='bg-gray-950 mx-auto h-auto container my-4 p-4 rounded-md flex flex-col lg:flex-row justify-center items-center self-center'>
          <AlumniComponent />
          <AlumniComponent />
        </div>          
      </div>
    </>
  )
}

export default alumni
