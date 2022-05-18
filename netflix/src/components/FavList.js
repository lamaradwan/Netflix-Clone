import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

export default function FavList() {
    const [favMovies, setFavMovies] = useState()

    async function handleGetFavMovies() {
        let url = `${process.env.REACT_APP_SERVER}/favMovies`
        let response = await fetch(url, {
            method: "GET"
        });
        let favMovies = await response.json();
        setFavMovies(favMovies);
        console.log("favMovies", favMovies)
    }

    async function handleDeleteFavorite(e, movieID) {
        e.preventDefault();
        let url = `${process.env.REACT_APP_SERVER}/deleteFavMovie/${movieID}`
        let response = await fetch(url,
            {
                method: "DELETE"
            });
        if (response.status == 200) {
            handleGetFavMovies();
            alert(" movie deleted successfully")
        }
    }

    useEffect(() => {
        handleGetFavMovies();
    }, []);

    let imageURL = 'https://image.tmdb.org/t/p/original';
    return (
        <>
            <h1>Favorite Movies Page</h1>
            {
                favMovies && favMovies.map((movie) => {
                    return (
                        <Card style={{ width: '25rem', margin: '20px', boxShadow: '1px 1px 10px gray' }} key={movie.id}>
                            <Card.Img variant="top" src={`${imageURL}${movie.image}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.summary}
                                    <br />
                                    <span style={{ fontWeight: 'bold' }}>
                                        Comment:
                                    </span>
                                    {movie.personalcomments}
                                    <br />
                                    <Button variant="danger" onClick={(e) => handleDeleteFavorite(e, movie.id)}>
                                        Delete
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </>
    )
}

