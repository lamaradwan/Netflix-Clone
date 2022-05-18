
import { useRef } from "react";
import { Button, Modal, Form } from "react-bootstrap"

export default function ModalMovie(props) {
  let imageURL = 'https://image.tmdb.org/t/p/original';

  let commentRef = useRef();
  function handleComment(e){
    e.preventDefault();
    let userComment = commentRef.current.value;
    console.log(userComment);

    //create a copy of the choosen card & add a comment property to it
    let newMovie = {...props.choosenCard, userComment}
    //Invoke the function from Home parent
    props.updateMovie(newMovie, newMovie.id)
    
  }

  async function handleAddToFavorite(e,movie){
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER}/addFavoriteMovie`
    let dataToDB = {
      title: movie.title,
      image: movie.poster_path,
      summary: movie.overview,
      personalComments: movie.comment,
    };
    let response = await fetch(url, 
      {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(dataToDB),
      })
      let addedMovie = await response.json();
      console.log("addedMovie =>", addedMovie);
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.choosenCard.title}</Modal.Title>
        </Modal.Header>
        <img src={`${imageURL}${props.choosenCard.poster_path}`} />
        <Modal.Body>
          {props.choosenCard.overview}
          {/* Comments field */}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Add Your Comments</Form.Label>
              <Form.Control placeholder="Type your comment here .." as="textarea" rows={3} ref={commentRef}/>
            </Form.Group>
            <Button variant="secondary" type="submit" onClick={(e)=>handleComment(e)}>
            Submit Comment
          </Button>
          <Button variant="primary" onClick={(e)=>handleAddToFavorite(e, props.choosenCard)}>
            Add to Favorites
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p>
          {props.choosenCard.comment?props.choosenCard.comment:"No Comment Added"}
          </p>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  )
}