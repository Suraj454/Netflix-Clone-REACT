import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem';
import {MdChevronLeft,MdChevronRight} from "react-icons/md"

const MovieRow = ({title, url}) => {
  const rowId = Math.floor((Math.random()) * 1000 ) 

  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
     axios.get(url).then((response) => {
      setMovies(response.data.results);
     })

  },[url])
  console.log(movies);





  const slide  = (offset) => {
    const slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + offset
  }

  return (
      <>
       <h2 className='font-bold md:text-xl p-4 capitalize z-10'>{title}</h2>
       <div className='relative flex items-center group'>

       <MdChevronLeft
       onClick={() => slide(-500)}
        className='bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden
       group-hover:block cursor-pointer'
        size={40}
       />

       <div  id={`slider` + rowId}
       className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth
        scrollbar-hide'>
         
         {
          movies.map((movie) => {
            return(
               
              <MovieItem key={movie.id} movie={movie} 
              />
            )
          })
         }

        </div>
        <MdChevronRight
         onClick={() => slide(500)}
           className='bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden
        group-hover:block cursor-pointer'
        size={40}
        />
       </div>

    
      </>
  )
}

export default MovieRow




/*

import React, { useEffect, useState } from 'react'
import axios from "./axios";
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url ="https://image.tmdb.org/t/p/original/";

function Row ( { title,fetchUrl, isLargeRow } ) {

    const [movies,setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
   

    useEffect( () => {
       
     async function fetchData () {
         const request = await axios.get(fetchUrl);
        //"https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213"
        console.log(request.data.results);
        setMovies(request.data.results);
        return request;
     }
     
     fetchData();
          
    },[fetchUrl]);

    const opts = {
      height:"390",
      width:"100%",
      playerVars: {
        autoplay: 1,
      },
    };

    const handleClick = (movie) => {
        if(trailerUrl){
          setTrailerUrl('');
        }else{
          movieTrailer(movie?.name || "" )
          .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));

          }).catch((error) => console.log(error));
        }
    }
  

  
    //console.log(movies);

  return (
    <div className='row'>

    <h2>{title}</h2>

    <div className='row_posters'>
       {
           movies.map((movie) => {

            return (
            <img 
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
             src={ `${base_url}${ isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
             alt={movie.name}/>
            )

           })
       }

    <div>
     {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row;


*/
