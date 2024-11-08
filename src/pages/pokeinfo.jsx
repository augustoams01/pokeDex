import React from 'react'
import NavBar from '../components/NavBar'
import { Button, Container } from '@mui/material'
import Bulba from '../public/images/bulba.png'
import EvolutionCard from '../components/EvolutionCard'

function PokeInfo({pokemonData}) {
    let id = pokemonData.id;
    id = `#${id.toString().padStart(3, '0')}`;

    const limitedMoves = pokemonData.moves.slice(0, 3);
    const limitedHabilities = pokemonData.abilities.slice(0, 3);
    console.log(pokemonData);

  return (
    <>
        <NavBar hideSearch={true}/>
        <h2 className='text-[#C73659] tracking-wider text-4xl text-center font-black uppercase py-4'>Pokemon Info</h2>
        <Container maxWidth="xl" sx={{display: 'flex',flexDirection: 'column' , justifyContent: 'center'}}>
            <div className='bg-[#191919] w-full h-full p-4 rounded-md'>
                <div className='flex min-[0px]:flex-col md:flex-row lg:flex justify-between gap-4'>
                    <div className='flex flex-col gap-4'>

                        <div className='bg-neutral-800 rounded-md lg:size-[300px] min-[0px]:size-full flex justify-center items-center'>
                         <img src={pokemonData.sprites.front_default} alt="" className='size-80'/>
                        </div>
          
                        <div className='bg-neutral-800 p-5 rounded-md'>
                            <h2 className='text-white py-2 text-xl tracking-wider'>stats:</h2>
                            {pokemonData.stats.map((stat) => (
                                <div className='flex gap-1'>
                                    <p className='text-white'>{stat.stat.name}:</p>
                                    <p className='text-white'>{stat.base_stat}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='p-5 bg-neutral-800 rounded-md w-full'>
                        <h2 className='text-white text-4xl uppercase font-black'>{pokemonData.name}</h2>
                        <div className='flex min-[0px]:flex-col md:flex-row lg:flex-row gap-48 min-[300px]:gap-5'>
                            <div className='mt-2 '>
                                <h2 className='text-white mb-2'>Information</h2>
                                <div className='flex gap-48 md:gap-48 lg:gap-40 min-[0px]:gap-10 bg-[#C73659] min-[0px]:max-w-[80%] min-h-full md:min-w-[400px] md:max-w-[440px] p-5 rounded-md'>
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
                                                <h2 className='text-white'>id:</h2>
                                                <p className='text-white'>{id}</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2 flex flex-col justify-between'>
                                <div>
                                    <h2 className='text-white mb-2'>Moves</h2>
                                    <div className='flex gap-3 border-[2px] h-max border-white max-w-fit p-5 rounded-md '>
                                            
                                                {limitedMoves.map((move) => (
                                                    <p className='text-black p-1 px-4 rounded-full bg-white max-h-min'>{move.move.name}</p>
                                                ))}

                                    </div>
                                </div>

                                <div className='flex min-[0px]:flex-col gap-5 mt-2 md:flex-row'>
                                    <div>
                                    <h2 className='text-white mt-5 mb-2'>Abilities</h2>
                                    <div className='flex gap-3 border-[2px] border-white max-w-fit p-5 rounded-md '>
                                            
                                            {pokemonData.abilities.map((ability) => (
                                                <p className='text-black p-2 px-4 rounded-full bg-white max-h-min'>{ability.ability.name}</p>
                                            ))}

                                    </div>
                                    </div>
                                    <div>
                                    <h2 className='text-white mt-5 mb-2'>type</h2>
                                    <div className='flex gap-3 border-[2px] border-white max-w-fit p-5 rounded-md '>
                                        {pokemonData.types.map((type) => (
                                            <p className={`border-[2px] border-slate-300 p-1 nax-h-min text-white rounded-full px-4`}>{type.type.name}</p>
                                        ))}
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
            {/* <div className='bg-[#191919] w-full h-full p-4 rounded-md mt-5'>
                <h2 className='text-white text-3xl uppercase font-black pb-4'>Evolutions:</h2>
                <div className='bg-neutral-800 p-10 flex justify-between rounded-md'>
                    <EvolutionCard/>
                    <EvolutionCard/>
                    <EvolutionCard/>
                </div>
            </div> */}
            <Button href='/' sx={{backgroundColor: "#C73659", mt: 3, color: "white", fontWeight: "bold", mb: 3}}>Explore More pokemons</Button>
        </Container>
    </>
  )
}

export default PokeInfo