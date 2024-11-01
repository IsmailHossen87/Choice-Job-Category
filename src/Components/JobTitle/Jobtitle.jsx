import React from 'react';

const Jobtitle = ({data}) => {
    const {company_name,id,job_title,logo,location,salary,remote_or_onsite} = data
    console.log(data)
    return (
        <div className='bg-indigo-100 py-4 px-3 pl-9 space-y-2 rounded-2xl'>
            <img src={logo} alt="" />
            <h3 className='text-xl font-semibold'>{job_title}</h3>
            <p className='text-gray-200'>{company_name}</p>
            <div className='flex justify-between w-3/4 my-2 font-semibold'>
                <h3>{remote_or_onsite}</h3>
                <p>{job_title}</p>
            </div>
            <div className='flex justify-between w-3/4'>
                <h3>{location}</h3>
                <p>{salary}</p>
            </div>
            <button className='btn btn-primary'>View Deatails</button>
        </div>
    );
};

export default Jobtitle;