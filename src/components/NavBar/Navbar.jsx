import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget'

function BasicExample() {
  return (
    <Navbar variant="dark" bg="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">Urban</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/products">Products</Nav.Link>
           
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/shoes">Shoes</NavDropdown.Item>
              <NavDropdown.Item href="/sportshoes">
                Sport shoes
              </NavDropdown.Item>
              <NavDropdown.Item href="/shirt">Shirt</NavDropdown.Item>
              <NavDropdown.Item href="/tshirt">
                T-Shirt
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
          <Nav.Link href="/cart"><CartWidget/></Nav.Link>
     
      </Container>
    </Navbar>
  );
}

export default BasicExample;