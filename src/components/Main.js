
import React, { useState } from "react";
import { Navbar, Container, Nav, Table, Button } from "react-bootstrap";

function Main() {

    return (
        <div>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand >Diary</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/settings">Settings</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

            <div>
                <Container style={{ paddingTop: 50 }}>
                    <Table striped bordered hover size="sm" >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div style={{ textAlign: "right", paddingTop: 30 }}>
                        <Button variant="outline-dark">New Dairy</Button>
                    </div>
                </Container>
            </div>
        </div >
    )
}

export default Main;