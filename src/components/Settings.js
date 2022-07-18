import { Navbar, Container, Nav, Form, Button, Row, Col, Placeholder } from "react-bootstrap";
import body from "../css/test.css"

function Settings() {

    return (
        <div>
            <div>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="/main" style={{ fontSize: 30 }}>Diary</Navbar.Brand>
                            <Nav>
                                <Nav.Link href="/newdiary">New diary</Nav.Link>
                                <Nav.Link href="/settings">Account</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div className="body">
                    <Container fluid>
                        <Row style={{ border: 1, borderStyle: "solid", borderColor: "black" }}>
                            <Col>
                                <div>
                                    <h4>id</h4>
                                </div>
                                <div>
                                    <h4>password</h4>
                                </div>
                                <div>
                                    <h4>username</h4>
                                </div>
                                <div>
                                    <h4>email</h4>
                                </div>

                                <div style={{ textAlign: "center", marginBottom: 20 }}>
                                    <Button variant="outline-dark">Register</Button>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>

            </div >
        </div >
    )
}

export default Settings;