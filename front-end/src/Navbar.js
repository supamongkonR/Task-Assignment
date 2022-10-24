import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CSS/Navbar.css'
const Navbars = () => {
    return ( 
        <Navbar className="color-nav" variant="light" >
        <Container fluid>
          <Navbar.Brand href="#">furniture Online</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px'}}
              navbarScroll
        
            >
              <Nav.Link href="#action1">ค้นหาบริการช่าง</Nav.Link>
              <Nav.Link href="#action2">แนะนำการซื้อขาย</Nav.Link>
              <Nav.Link href="#action2">ไอเดียและบทความน่ารู้</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
              
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
 
export default Navbars;