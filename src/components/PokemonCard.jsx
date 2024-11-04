import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Image } from '@mui/icons-material';

export default function PokemonCard({name, image, tag, type}) {
  tag = `#${tag.toString().padStart(3, '0')}`;
  return (
    <div className='max-w-80 bg-[#191919] group hover:-translate-y-2 transition duration-300'>
      <div className='flex justify-center'>
        <img src={image} alt="pokemon image" className='size-40'/>
      </div>
      <div className='flex flex-col items-center justify-center text-xl font-bold py-6'>
        <p className='text-[#EEEEEE]'>
          {tag}
        </p>
        <h2 className='text-[#EEEEEE] tracking-wide uppercase'>
          {name}
        </h2>
        <div className='flex'>
          <div className='bg-red-500 px-3 my-2 rounded-full'>
            <p className='text-[#EEEEEE] z-10'>{type}</p>
          </div>
          <div className='group-hover:bg-red-500 px-3 my-2 rounded-full absolute group-hover:blur-md transition duration-300 -z-10'>
            <p className='text-[#EEEEEE]'>{type}</p>
          </div>
        </div>
      </div>

    </div>
  );
}
