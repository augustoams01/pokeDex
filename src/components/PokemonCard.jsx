import * as React from 'react';
import {twMerge} from 'tailwind-merge';

export default function PokemonCard({name, image, tag, type}) {

  tag = `#${tag.toString().padStart(3, '0')}`;
  
  const colors = {
    grass: { color: "bg-green-500", colorHover: "bg-green-300" },
    fire: { color: "bg-red-500", colorHover: "bg-red-300" },
    water: { color: "bg-blue-500", colorHover: "bg-blue-300" },
    bug: { color: "bg-teal-700", colorHover: "bg-teal-500" },
    normal: { color: "bg-zinc-500", colorHover: "bg-zinc-300" },
    poison: { color: "bg-purple-500", colorHover: "bg-purple-300" },
    electric: { color: "bg-yellow-500", colorHover: "bg-yellow-300" },
    ground: { color: "bg-yellow-900", colorHover: "bg-yellow-700" },
    fairy: { color: "bg-pink-500", colorHover: "bg-pink-300" }
  };
  
  const { color, colorHover } = colors[type] || { color: "", colorHover: "" };



  return (
    <div className='max-w-80 relative bg-[#0e0e0e]  rounded-md group hover:-translate-y-2 transition duration-300 z-10'>
      <div className='bg-'></div>
      <div className="absolute inset-0 bg-zinc-800 rounded-md -z-10 [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
      <div className={twMerge("absolute size-16 rounded-xl bg-red-500 top-1.5 right-1.5 -z-20 blur-lg opacity-0 group-hover:opacity-100 transition duration-300", color)}></div>
      <div className={twMerge(`absolute size-16 rounded-xl bg-red-500 group-hover:${colorHover} transition duration-300 top-1.5 right-1.5 -z-20`, color)}></div>
      <div className='flex justify-center pt-8'>
        <img src={image} alt="pokemon image" className='size-40 group-hover:scale-[1.20] transition duration-300'/>
      </div>
      <div className='flex flex-col items-center justify-center text-xl font-bold py-6'>
        <p className='text-[#EEEEEE]'>
          {tag}
        </p>
        <h2 className='text-[#EEEEEE] tracking-wide uppercase'>
          {name}
        </h2>
        <div className='flex'>
          <div className={twMerge('bg-red-500 px-3 my-2 rounded-full', color)}>
            <p className='text-[#EEEEEE] z-10'>{type}</p>
          </div>
          <div className={twMerge(`bg-red-500 group-hover:${color} px-3 my-2 rounded-full absolute group-hover:blur-md transition duration-300 -z-10`, color) }>
            <p className='text-[#EEEEEE]'>{type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
