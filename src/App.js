import './App.css';
import * as React from "react";
import {Route, Routes} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import C2727 from "./components/C2727";
import C1727 from "./components/C1727";

function App() {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/" className="text-white">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className="text-white">Home</Nav.Link>
                            <Nav.Link href="/C1727" className="text-white">C1727</Nav.Link>
                            <Nav.Link href="/C2727" className="text-white">C2727</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/">
                    <Route index element={<C1727/>}/>
                    <Route path="/C1727" element={<C1727/>}/>
                    <Route path="/C2727" element={<C2727/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
