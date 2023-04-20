import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header, OccupationAlumniForm, PGAlumniForm, SocialMediaAlumniForm } from '@/components'

const alumni_form = () => {
  return (
    <div className='bg-black h-full flex flex-col'>
      <Header />
      <form
        action='/forms/submit_alumni_form'
        method='post'
        className='bg-gray-950 px-2 h-auto w-[90%] md:w-[70%] my-4 rounded-md flex flex-col justify-center items-center self-center'
      >
        <Image
          unoptimized
          src='/user-student.png'
          alt='alumni-form'
          width='100'
          height='100'
        />
        <h1 className='text-3xl text-center mb-3 text-white font-semibold'>
          Register as Alumni / Student
        </h1>
        <p className="text-red-600 text-xs font-bold">Note: Only Students / Alumni of GC College can register!</p>
        <hr className="border-gray-700 w-full my-8" />

        <div className="flex w-[90%] flex-col justify-center mb-3">
            <div className="flex flex-col md:flex-row">
                <label htmlFor='fullName' className='text-white text-left mx-5 flex items-center md:pl-8'>
                  Full Name:
                  <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  required
                  placeholder='Enter your full name'
                  className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[70%]'
                />
            </div>
            <div className="mt-3 flex flex-col md:flex-row">
                <label htmlFor='email' className='text-white text-left mx-5 flex items-center md:pl-8'>
                  Email ID:
                  <span className="text-red-600 font-bold">*</span>&ensp;&nbsp;
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  placeholder='Enter your email address'
                  className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[70%]'
                />
            </div>
            <div className="mt-3 flex flex-col md:flex-row">
                <label htmlFor='phone' className='text-white text-left mx-5 flex items-center md:pl-8'>
                    Contact No. (WhatsApp preferable):
                  <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  required
                  placeholder='Enter your phone number (It won&#39;t be shared publicly!)'
                  className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[49%]'
                />
            </div>
            <div className="mt-5 flex flex-row text-white">
                <p className='text-left mx-5 flex items-center md:pl-8'>Sex:<span className="text-red-600 font-bold">*</span>&ensp;&ensp;</p>
                <label htmlFor='male' className='mr-2'>
                <input type='radio' id='male' name='sex' value='male' />
                &ensp;Male&ensp;&ensp;&ensp;
                </label>
                <label htmlFor='female' className='mr-2'>
                <input type='radio' id='female' name='sex' value='female' />
                &ensp;Female&ensp;&ensp;&ensp;
                </label>
                <label htmlFor='others'>
                <input type='radio' id='others' name='sex' value='others' />
                &ensp;Others&ensp;&ensp;&ensp;
                </label>
            </div>

            <div className="mt-5 flex flex-col md:flex-row">
                <label htmlFor='batchStartYear' className='text-white text-left mx-5 flex items-center md:pl-8'>
                    Starting Year of your Batch:
                    <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                    type='month'
                    id='starting-year'
                    name='starting-year'
                    required
                    placeholder='Enter the starting year of your batch'
                    className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[55%]'
                />
            </div>
            <div className="mt-3 flex flex-col md:flex-row">
                <label htmlFor='department' className='text-white text-left mx-5 flex items-center md:pl-8'>
                    Department:
                    <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                    type='text'
                    id='department'
                    name='department'
                    required
                    placeholder='Enter your college department or write &#39;Pass&#39;'
                    className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[68%]'
                />
            </div>
            
            <hr className="border-gray-700 w-full my-8" />

            <OccupationAlumniForm />

            <hr className="border-gray-700 w-full my-8" />

            <PGAlumniForm />

            <hr className="border-gray-700 w-full my-8" />

            <SocialMediaAlumniForm />

            <hr className="border-gray-700 w-full my-8" />

            <div className="flex flex-col mb-3">
                <label htmlFor="proofDocument" className="text-white text-left flex md:mr-8 mx-5 my-5 items-center md:pl-8">
                    Proof of Document (Provide proof like ID Card, Fee Card, Admit Card, Marksheet, etc. in pdf or jpeg format so that we can verify you as an alumni / student):
                    <span className="text-red-600 font-bold">*</span>
                </label>
                <div className="relative border-dashed border-2 border-gray-400 bg-gray-100 rounded-md w-[80%] h-36 flex mx-auto justify-center items-center">
                    <div className="absolute top-0 left-0 right-0 bottom-0 m-auto text-center">
                    <div className="mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M2 5a1 1 0 011-1h4.586a1 1 0 01.707.293l.707.707a1 1 0 01.293.707V9.5h6.5a1 1 0 010 2H9.5v3.793a1 1 0 01-.293.707l-.707.707a1 1 0 01-.707.293H3a1 1 0 01-1-1V5zm8.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-7 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4.5 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clipRule="evenodd" />
                        </svg>
                        <p className="mb-2 font-semibold text-gray-900">Drag and drop your file here or</p>
                        <p className="text-gray-700">Select file to upload</p>
                    </div>
                    <input type="file" id="proofDocument" name="proofDocument" className="hidden" />
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Upload Files
                    </button>
                    </div>
                </div>
            </div>

        </div>

        <hr className="border-gray-700 w-full my-8" />

        <div className="flex md:ml-auto md:mr-20">
            <button type="submit" className="bg-purple-900 text-lg text-white w-28 p-2 mt-4 mb-8 rounded-md hover:bg-purple-950 transition-all">
                Register!
            </button>
        </div>
       </form>
    </div>
  )
}

export default alumni_form
