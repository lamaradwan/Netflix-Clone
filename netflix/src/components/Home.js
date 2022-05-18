import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import NavbarMovies from "./NavbarMovies";

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

    function updateMovie(newMovie, id){
        let updatedMovie = movies.map(movie =>{
            if(movie.id === id){
                movie.comment = newMovie.userComment
                return movie;
            }
            else{
                return movie;
            }
        })
        setMovies(updatedMovie);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return(
        <>
        {/* <h1>Home Page</h1> */}
        {
            movies?<MovieList movies ={movies} updateMovie={updateMovie}/>:"No Movies yet in the list, please wait .."
        }
        </>
    )
}