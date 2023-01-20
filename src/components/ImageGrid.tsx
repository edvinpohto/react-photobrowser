import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import type { Image } from '../types/types'
import getImages from "../utilities/getImages";

const ImageGrid = () => {
  const [images, setImages] = useState<Image[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getImages();
      setImages(data);
      setLoading(false)
    };
    fetchData();
  },[]);

  return (
    <>
      <div className="">
        <div className="flex justify-center text-3xl font-mono font-bold p-5">
          <h1>Edvin's Photobrowser</h1>
        </div>

        <div className="flex justify-center mb-5">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 sm:gap-4">
            {images.map((image) => {
              return (
                <Link 
                  key={image.id}
                  to={"/" + image.id}
                  state={{ 
                    url: image.url,
                    title: image.title }}>
                  <img 
                    src={image.thumbnailUrl} 
                    alt="image" 
                    height="70" 
                    width="70" 
                    className="rounded-md hover:opacity-70"/>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageGrid