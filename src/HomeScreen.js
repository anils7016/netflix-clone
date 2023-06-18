import React, {useState } from 'react'
import './HomeScreen.css';
import { Nav } from './Nav';
import Banner from './Banner';
import Row from './Row';
import request from './Requests';

export const HomeScreen = () => {
  return (
    <div className='test'>
        <Nav />

        <Banner />

        <Row 
          title="Netflix Originals" 
          fetchUrl={request.fetchNetflixOriginals} 
          isLargeRow />
        <Row title="Netflix Trending" fetchUrl={request.fetchTrending} />  
        <Row title="Netflix Toprated" fetchUrl={request.fetchTopRated} />  
        <Row title="Action Moview" fetchUrl={request.fetchActionMovies} />  
        <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />  
        <Row title="Horroe Movie" fetchUrl={request.fetchHorrorMovies} />  
        <Row title="Romance Moview" fetchUrl={request.fetchRomanceMovies} />  
        <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />  

    </div>
  )
}
