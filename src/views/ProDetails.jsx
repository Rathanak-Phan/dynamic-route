import React from 'react'
import { useParams } from 'react-router-dom'

function ProDetails({cloths}) {
    const { id } = useParams();

    const product = cloths.find((item) => item.id == id);


  return (
    <div className='h-screen flex items-center justify-center gap-[80px] lg:px-[15vw] px-[5vw] py-5'>
        <div className='h-9/10'>
            <img src={product.image} alt="" className='h-full w-[800px]' />
        </div>
        <div className='bg-gray-300 h-9/10 w-full p-5 rounded-lg'>
            <p className='text-5xl font-bold'>{product.title}</p>
            <p className='text-2xl my-2'>{product.dis}</p>
        </div>
    </div>
  )
}

export default ProDetails