import React from 'react';

const Category = ({category}) => {
    const {availability,category_name,logo} = category
    return (
        <div className='bg-indigo-400 py-4 px-3 pl-9 space-y-2 rounded-2xl'>
            <img className='rounded-2xl' src={logo} alt="" />
            <h3 className="font-semibold">{category_name}</h3>
            <p>{availability}</p>
        </div>
    );
};

export default Category;