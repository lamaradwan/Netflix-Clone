import Movie from "./Movie"
export default function MovieList(props){
return(
    <>
    {
        props.movies.map((movie)=>{
            return(
                <>
                <Movie movies={movie} updateMovie ={props.updateMovie}/>
                {/* <div>
                    <h1>{movie.title}</h1>
                </div> */}
                </>
            )
        })
    }
    </>
)
}