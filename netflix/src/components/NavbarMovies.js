import { Navbar, Container, Nav } from "react-bootstrap"
export default function NavbarMovies(){
    return(
        <>
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#">Cinema for you</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favMovies">My Favorite Movies</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </>
    )
}