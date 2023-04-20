import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SocialMediaAlumniForm = () => {
    return (
        <div id="social-fields">
            <h2 className="text-2xl text-white font-bold text-center">Social Media Handles</h2>
            <p className="text-red-600 text-xs text-center">Provide at least one social media link!</p>
            <div className="mt-5 flex flex-col md:flex-row">
                <label htmlFor='alumni-fb' className='text-white text-left mx-5 flex items-center md:pl-8'>
                    Facebook:
                </label>
                <input
                    type='url'
                    id='alumni-fb'
                    name='alumni-fb'
                    placeholder='Enter your Facebook profile link'
                    className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[70%]'
                />
            </div>
            <div className="mt-3 flex flex-col md:flex-row">
                <label htmlFor='alumni-insta' className='text-white text-left mx-5 flex items-center md:pl-8'>
                    Instagram:
                </label>
                <input
                    type='url'
                    id='alumni-insta'
                    name='alumni-insta'
                    placeholder='Enter your Instagram profile link'
                    className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[70%]'
                />
            </div>
            <div className='mt-3 flex flex-col md:flex-row'>
                <label htmlFor='alumni-linkedin' className='text-white text-left mx-5 flex items-center md:pl-8'>
                    LinkedIn:&ensp;&nbsp;
                </label>
                <input
                    type='url'
                    id='alumni-linkedin'
                    name='alumni-linkedin'
                    placeholder='Enter your LinkedIn profile link'
                    className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[70%]'
                />
            </div>
            <div className='mt-3 flex flex-col md:flex-row'>
                <label htmlFor='alumni-twitter' className='text-white text-left mx-5 flex items-center md:pl-8'>
                    Twitter:&ensp;&ensp;&ensp;
                </label>
                <input
                    type='url'
                    id='alumni-twitter'
                    name='alumni-twitter'
                    placeholder='Enter your Twitter profile link'
                    className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[70%]'
                />
            </div>
            <div className='mt-3 flex flex-col md:flex-row'>
                <label htmlFor='alumni-github' className='text-white text-left mx-5 flex items-center md:pl-8'>
                    GitHub:&ensp;&ensp;&ensp;
                </label>
                <input
                    type='url'
                    id='alumni-github'
                    name='alumni-github'
                    placeholder='Enter your GitHub profile link'
                    className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[70%]'
                />
            </div>
            <div className='mt-3 flex flex-col md:flex-row'>
                <label htmlFor='alumni-portfolio' className='text-white text-left mx-5 flex items-center md:pl-8'>
                    Website / Portfolio:
                </label>
                <input
                    type='url'
                    id='alumni-portfolio'
                    name='alumni-portfolio'
                    placeholder='Enter your Website / Portfolio link'
                    className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[63%]'
                />
            </div>
        </div>
    )
}

export default SocialMediaAlumniForm
