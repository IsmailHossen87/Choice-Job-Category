import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const JobCategory = () => {
    const [categorys,setCategory] = useState([])
    useEffect(()=>{
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div>
            <div className='text-center mt-6 space-y-2'>
            <h2 className="text-5xl font-semibold ">Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='container mx-auto my-5 grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    categorys.map(category => <Category category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategory;