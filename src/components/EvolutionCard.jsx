import React from 'react'
import Bulba from '../public/images/bulba.png'

function EvolutionCard() {
  return (
    <div className='p-5 max-w-max text-center justify-center items-center'>
        <div className='bg-neutral-200 size-56 p-5 rounded-full'>
        <img src={Bulba} alt="" className='size-48'/>
        </div>
        <div className='flex gap-3 items-center justify-center'>
            <h2 className='text-white text-2xl'>Bulbasaur</h2>
            <p className='text-white text-2xl'>#001</p>
        </div>
        <div className='flex justify-center gap-3 mt-2'>
                <p className='bg-emerald-500 p-1 rounded-full px-5'>Grass</p>
                <p className='bg-violet-500 p-1 rounded-full px-5'>Poison</p>
        </div>
    </div>
  )
}

export default EvolutionCard