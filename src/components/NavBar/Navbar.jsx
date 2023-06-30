import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <Navbar variant="dark" bg="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">Urban</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Products</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item > <Link to="/category/shoes">Shoess</Link> </NavDropdown.Item>
              <NavDropdown.Item >  <Link to="/category/short">Shorts</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/category/shirt">Shirts</Link> </NavDropdown.Item>
              <NavDropdown.Item ><Link to="/category/hoodie">Hoodies</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
          <Nav.Link href="/cart"><CartWidget/></Nav.Link>
     
      </Container>
    </Navbar>
  );
}

export default NavBar;