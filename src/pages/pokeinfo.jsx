import React from 'react'
import NavBar from '../components/NavBar'
import { Button, Container } from '@mui/material'
import Bulba from '../public/images/bulba.png'
import EvolutionCard from '../components/EvolutionCard'

function PokeInfo({pokemonData}) {

    console.log(pokemonData)
  return (
    <>
        <NavBar hideSearch={true}/>
        <h2 className='text-[#C73659] tracking-wider text-4xl text-center font-black uppercase py-4'>Pokemon Info</h2>
        <Container maxWidth="xl">
            <div className='bg-[#191919] w-full h-full p-4 rounded-md'>
                <div className='flex justify-between gap-4'>
                    <div className='flex flex-col gap-4'>

                        <div className='bg-neutral-800 rounded-md size-[300px] flex justify-center items-center'>
                         <img src={pokemonData.sprites.front_default} alt="" className='size-80'/>
                        </div>
          
                        <div className='bg-neutral-800 p-5 rounded-md'>
                            <h2 className='text-white py-2 text-xl tracking-wider'>stats:</h2>
                            <div className='flex'>
                                <p className='text-white'>HP:</p>
                                <p className='text-white'>800</p>
                            </div>
                            <div className='flex'>
                                <p className='text-white'>HP:</p>
                                <p className='text-white'>800</p>
                            </div>
                            <div className='flex'>
                                <p className='text-white'>HP:</p>
                                <p className='text-white'>800</p>
                            </div>
                            <div className='flex'>
                                <p className='text-white'>HP:</p>
                                <p className='text-white'>800</p>
                            </div>
                            <div className='flex'>
                                <p className='text-white'>HP:</p>
                                <p className='text-white'>800</p>
                            </div>
                            <div className='flex'>
                                <p className='text-white'>HP:</p>
                                <p className='text-white'>800</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 bg-neutral-800 rounded-md w-full'>
                        <h2 className='text-white text-4xl uppercase font-black'>{pokemonData.name}</h2>
                        <div className='flex gap-48 bg-[#C73659] max-w-[440px] p-5 rounded-md mt-5'>
                            <div>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-col gap-1'>
                                        <h2 className='text-white'>Height:</h2>
                                        <p className='text-white'>{pokemonData.height}</p>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h2 className='text-white'>Weight:</h2>
                                        <p className='text-white'>{pokemonData.weight}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                    <div className='flex flex-col gap-1'>
                                        <h2 className='text-white'>Category:</h2>
                                        <p className='text-white'>3'03"</p>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h2 className='text-white'>Abilities:</h2>
                                        <p className='text-white'></p>
                                    </div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h2 className='text-white'>type</h2>
                            <div className='flex gap-3 mt-2'>
                                <p className='bg-emerald-500 p-1 rounded-full px-5'>Grass</p>
                                <p className='bg-violet-500 p-1 rounded-full px-5'>Poison</p>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h2 className='text-white'>Weaknesses</h2>
                            <div className='flex gap-3 mt-2'>
                                <p className='bg-emerald-500 p-1 rounded-full px-5'>Grass</p>
                                <p className='bg-violet-500 p-1 rounded-full px-5'>Poison</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-[#191919] w-full h-full p-4 rounded-md mt-5'>
                <h2 className='text-white text-3xl uppercase font-black pb-4'>Evolutions:</h2>
                <div className='bg-neutral-800 p-10 flex justify-between rounded-md'>
                    <EvolutionCard/>
                    <EvolutionCard/>
                    <EvolutionCard/>
                </div>
            </div>
            <Button href='/'>Explore More Pokemon</Button>
        </Container>
    </>
  )
}

export default PokeInfo