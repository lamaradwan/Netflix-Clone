import { useState, useEffect } from "react";
import MovieList from "./MovieList";

export default function Home(){
    const[movies, setMovies] = useState();

    async function getMovie(){
    let url = process.env.REACT_APP_SERVER;
    console.log('url = ',url)
    let response = await fetch(`${url}/trending`);
    let moviesData = await response.json();
    setMovies(moviesData);
    console.log('moviesData',moviesData)
    
    }

    useEffect(() => {
        getMovie();
    }, []);

    return(
        <>
        <h1>Home Page</h1>
        {
            <MovieList movies ={movies}/>
        }
        </>
    )
}