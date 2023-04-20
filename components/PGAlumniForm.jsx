import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PGAlumniForm = () => {
    const [showPGFields, setShowPGFields] = useState(false);

    const handlePGChange = (e) => {
        if (e.target.value === 'yes') {
            setShowPGFields(true);
        } else {
            setShowPGFields(false);
        }
    }

    return (
        <>
            <div className="mt-5 flex flex-col text-white">
                <p className='text-left mx-5 flex items-center md:pl-8'>Have you pursued / currently pursuing your post-graduation?<span className="text-red-600 font-bold">*</span>&ensp;&ensp;</p>
                <div className="flex flex-row mt-3 ml-14" onChange={handlePGChange}>
                    <label htmlFor='yes' className='mr-2'>
                    <input type='radio' id='pg-yes' name='pg' value='yes' />
                    &ensp;Yes&ensp;&ensp;
                    </label>
                    <label htmlFor='no' className='mr-2'>
                    <input type='radio' id='pg-no' name='pg' value='no' />
                    &ensp;No&ensp;&ensp;
                    </label>
                </div>
            </div>

            {showPGFields && (
                <div id="pg-fields">
                    <div className="mt-4 flex flex-col md:flex-row">
                        <label htmlFor='pgDegree' className='text-white text-left mx-5 flex items-center md:pl-8'>
                            Post-Graduation Degree:
                        </label>
                        <select id='pgDegree' name='pgDegree' className='p-3 my-2 mx-4 rounded-md bg-gray-800 text-white'>
                            <option value="" disabled selected>Select an option</option>
                            <option value="MSC">Master of Science (M.Sc.)</option>
                            <option value="MCA">Master of Computer Applications (MCA)</option>
                            <option value="MBA">Master of Business Administration (MBA)</option>
                            <option value="MTECH">Master of Technology (M.Tech.)</option>
                            <option value="PhD">Doctor of Philosophy (Ph.D.)</option>
                            <option value="BEd">Bachelor of Education (B.Ed.)</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="mt-3 flex flex-col md:flex-row">
                        <label htmlFor='pgSpecialization' className='text-white text-left mx-5 flex items-center md:pl-8'>
                            Specialization:
                        </label>
                        <input
                            type='text'
                            id='pgSpecialization'
                            name='pgSpecialization'
                            placeholder='Enter your post-graduation specialization'
                            className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[67%]'
                        />
                    </div>
                    <div className='mt-3 flex flex-col md:flex-row'>
                        <label htmlFor='pgStartingYear' className='text-white text-left mx-5 flex items-center md:pl-8'>
                            Starting Year of Post Graduation:
                        </label>
                        <input
                            type='month'
                            id='pgStartingYear'
                            name='pgStartingYear'
                            placeholder='Enter your starting year of post-graduation'
                            className='p-2 my-2 mx-4 rounded-md bg-gray-800 text-white md:w-[51%]'
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default PGAlumniForm
