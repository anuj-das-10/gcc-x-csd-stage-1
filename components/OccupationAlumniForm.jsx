import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const OccupationAlumniForm = () => {
    const [showCompanyFields, setShowCompanyFields] = useState(false);

    const handleOccupationChange = (e) => {
        if (e.target.value === 'Employed'|| e.target.value === 'Business' || e.target.value === 'Teacher/Professor') {
            setShowCompanyFields(true);
        } else {
            setShowCompanyFields(false);
        }
    }
    
    return (
        <>
            <div className="mt-3 flex flex-col md:flex-row">
                <label htmlFor='current-city' className='text-white text-left mx-5 flex items-center md:pl-8'>
                    Current City:
                    <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                    type='text'
                    id='current-city'
                    name='current-city'
                    required
                    placeholder='Enter your current city'
                    className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[68%]'
                />
            </div>

            <div className="mt-3 flex flex-col md:flex-row">
                <label htmlFor='current-occupation' className='text-white text-left mx-5 flex items-center md:pl-8'>
                    Current Occupation:
                    <span className="text-red-600 font-bold">*</span>
                </label>
                <select id='current-occupation' name='current-occupation' required className='p-3 my-2 mx-4 rounded-md bg-gray-800 text-white' onChange={handleOccupationChange}>
                    <option value="" disabled selected>Select an option</option>
                    <option value="Student">Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Business">Business</option>
                    <option value="Teacher/Professor">Teacher / Professor</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Retired">Retired</option>
                    <option value="Others">Others</option>
                </select>
            </div>

            {showCompanyFields && (
                <div id="company-fields">
                    <div className="mt-3 flex flex-col md:flex-row">
                        <label htmlFor='companyName' className='text-white text-left mx-5 flex items-center md:pl-8'>
                            Name of your Company / Organization:
                        </label>
                        <input
                            type='text'
                            id='companyName'
                            name='companyName'
                            placeholder='Enter the name of your current organization'
                            className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[46%]'
                        />
                    </div>
                    <div className="mt-3 flex flex-col md:flex-row">
                        <label htmlFor='yrsOfExp' className='text-white text-left mx-5 flex items-center md:pl-8'>
                            Years of Experience:
                        </label>
                        <input
                            type='number'
                            id='yrsOfExp'
                            name='yrsOfExp'
                            placeholder='Enter your experience in no. of years'
                            className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[62%]'
                        />
                    </div>
                </div>
            )}
            
            <div className="my-5 flex flex-col text-white">
                <p className='text-left mx-5 flex items-center md:pl-8'>Are you currently working in a technology-related field?<span className="text-red-600 font-bold">*</span>&ensp;&ensp;</p>
                <div className="flex flex-row mt-3 ml-14">
                    <label htmlFor='yes' className='mr-2'>
                    <input type='radio' id='tech-yes' name='tech' value='yes' />
                    &ensp;Yes&ensp;&ensp;
                    </label>
                    <label htmlFor='no' className='mr-2'>
                    <input type='radio' id='tech-no' name='tech' value='no' />
                    &ensp;No&ensp;&ensp;
                    </label>
                </div>
            </div>
        </>
    )
}

export default OccupationAlumniForm
