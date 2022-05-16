import { Button, Modal } from "react-bootstrap"

export default function ModalMovie(props){
    return(
        <>
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.choosenCard.title}</Modal.Title>
        </Modal.Header>
        <img src={props.choosenCard.poster_path}/>
        <Modal.Body>{props.choosenCard.overview}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}