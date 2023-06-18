import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './Requests'; 

const Row = ({title, fetchUrl, isLargeRow=false}) => {
    const [movies, setMovies] = useState([])
    useEffect( ()=> {
      async function fetchData(){
        const request = await axios.get(fetchUrl)
        console.log('request',request)
        //if(request.data.length > 0) {
          setMovies(request.data.results)
        //}
        return request;
      }
      fetchData();
    }, [fetchUrl]);
    console.log('row=',movies)
  return (
    <div>
        <h2>{title}</h2>
        <div className='row__poster'>
        {
            movies.map( movie => {
                return (
                    <img  src={`${'https://image.tmdb.org/t/p/original'}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="Netflix"/>
                )
            })
        }
        </div>
    </div>
  )
}

export default Row