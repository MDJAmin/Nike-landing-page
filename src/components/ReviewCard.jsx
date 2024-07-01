import React from 'react'
export default function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center me-7'>
        <h3 className='font-palanquin text-3xl text-center font-bold text-blue-500'>
        {customerName}
        <p className='font-montserrat text-slate-gray'>({rating})</p>
      </h3>
      </div>
    </div>
  );
}
