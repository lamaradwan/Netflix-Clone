import { Card, Button, Modal } from "react-bootstrap"
import { useState } from "react";
import ModalMovie from "./ModalMovie";

export default function Movie(props){
    const[show, setShow] = useState(false);
    const[choosenCard,setChoosenCard] = useState();

    const handleClose = ()=> setShow(false);
    
    const handleShow = (receivedMovieFromOnClick)=> {
        setShow(true);
        setChoosenCard(receivedMovieFromOnClick);
    }
    let imageURL = 'https://image.tmdb.org/t/p/original';
    return(
        <>
        <Card style={{ width: '25rem', margin:'20px', boxShadow:'1px 1px 10px gray'}} key={props.movies.id}>
        <Card.Img variant="top" src={`${imageURL}${props.movies.poster_path}`} />
        <Card.Body>
        <Card.Title>{props.movies.title}</Card.Title>
        <Card.Text>
            {props.movies.overview}
        </Card.Text>
        <Button variant="primary" onClick={() => {
                handleShow(props.movies);
              }} >Explore More</Button>
        </Card.Body>
        </Card>
        {choosenCard &&
        <ModalMovie show = {show} handleClose={handleClose} choosenCard={choosenCard} updateMovie={props.updateMovie}/>
        }
        </>
    )
}