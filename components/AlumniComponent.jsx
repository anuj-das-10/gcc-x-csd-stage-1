import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoLocationSharp } from 'react-icons/io5'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsGlobe2 } from 'react-icons/bs'

const AlumniComponent = () => {
  const sex = 'female';

  return (
    <>      
      <div className='container flex flex-col md:flex-row self-center md:self-start border rounded-[16px] my-4 md:mx-5 p-4 text-white'>
        <div className='w-32 m-2 mr-5 self-center md:self-start'>
          <Image unoptimized src={sex === 'male' ? "/MaleAvatar.png" : "/FemaleAvatar.png"} 
            alt="avatar" width={120} height={120} className='rounded-full' />
        </div>
        <div className='container flex flex-col justify-center space-y-2 m-2'>
          <div className='flex flex-row font-bold text-2xl'>Anuja Das
            <div className="text-sm flex ml-auto mr-2 text-gray-400 font-medium items-center">
              <IoLocationSharp /> <p className="ml-1">Silchar, Assam</p>
            </div>
          </div>
          <p className='text-md font-medium'>Batch:&ensp; 
            <span className='font-bold'>2020</span>
            <span className='mx-1'>-</span>
            <span className='font-bold'>2023</span>
          </p>
          <p className='text-md font-medium'>Occupation:&ensp; 
            <span className='font-bold'>Employed</span>
          </p>
          <details className='text-base'>
            <summary className='cursor-pointer'><span className='bg-purple-600 py-1.5 px-4 rounded-xl'>More Details</span></summary>
            <div className='container m-2 flex flex-col space-y-2'>
            <p className='text-md font-medium'>Company / Organization:&ensp; 
                <span className='font-bold'>Microsoft</span>
              </p>
              <p className='text-md font-medium'>Experience:&ensp; 
                <span className='font-bold'>2</span>+&ensp;years
              </p>
              <p className='text-md font-medium'>Recent Degree:&ensp; 
                <span className='font-bold'>M.Sc.</span>
              </p>
              <p className='text-md font-medium'>Degree Start Year:&ensp; 
                <span className='font-bold'>2018</span>
              </p>
              <p className='text-md font-medium'>Specialization:&ensp; 
                <span className='font-bold'>Data Analytics</span>
              </p>
              <p className='text-md font-medium'>Email ID:&ensp; 
                <span className='font-bold'>anujadas@gmail.com</span>
              </p>
            </div>
            <div className='flex flex-row mt-4 mx-2 space-x-5'>
              <a href="#" className="cursor-pointer"><BsFacebook size={30} /></a>
              <a href="#" className="cursor-pointer"><BsInstagram size={30} /></a>
              <a href="#" className="cursor-pointer"><BsLinkedin size={30} /></a>
              <a href="#" className="cursor-pointer"><BsTwitter size={30} /></a>
              <a href="#" className="cursor-pointer"><BsGithub size={30} /></a>
              <a href="#" className="cursor-pointer"><BsGlobe2 size={30} /></a>
            </div>
          </details>
        </div>
      </div>
    </>
  )
}

export default AlumniComponent
