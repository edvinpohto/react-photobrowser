import { useLocation } from 'react-router-dom';

export default function ImageGrid() {
  const location = useLocation(); 

  return (
    <div>
      {/* Title */}
      <div className="flex justify-center text-3xl font-mono font-bold p-10">
        <h1>{location.state.title}</h1>
      </div>

      {/* Image */}
      <div className="flex justify-center mb-5">
        <img 
          src={location.state.url} 
          alt="full-image" 
          className="rounded-md w-80 sm:w-fit"/>
        </div>
    </div>
  )
}