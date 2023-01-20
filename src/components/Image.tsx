import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function ImageGrid() {
  const location = useLocation();

  console.log(location.state)

  return (
    <div>
      <div className="flex justify-center text-3xl font-mono font-bold p-10">
        <h1>{location.state.title}</h1>
      </div>

      <div className="flex justify-center mb-5">
        <img 
          src={location.state.url} 
          alt="full-image" 
          // height="600"
          // width="600"
          className="rounded-md w-80 sm:w-fit"/>
        </div>
    </div>
  )
}