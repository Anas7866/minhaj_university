import React from 'react'
import "../Home/Home.css"
import {
    Nav,
    Navbar as Navbarrr,
    NavItem,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import { StickyContainer, Sticky } from 'react-sticky';

function Navbar() {
    return (
        <div className="col-sm-12 navbar-fixed-top" style={{ backgroundColor: "white", boxShadow:"0px 2px 4px #888888 " }} >
        <StickyContainer className="container">

            <Navbarrr expand="lg" style={{ backgroundColor: 'white' }}  >
                <Navbarrr.Brand href="#">
                    <img src="https://www.mul.edu.pk/images/logo-mul.png" className="img-fluid img-size" />
                </Navbarrr.Brand>
                <Navbarrr.Toggle aria-controls="navbarScroll" />
                <Navbarrr.Collapse id="navbarScroll">
                    <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link  ><button className="btn btn-primary pl-3 pr-3" id="nav-button">Home</button></Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown> */}
                        {/* <Nav.Link href="#" disabled>
                    Link
                </Nav.Link> */}
                    </Nav>
                    {/* <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form> */}
                </Navbarrr.Collapse>
            </Navbarrr>



        </StickyContainer>
    </div>
    )
}

export default Navbar
