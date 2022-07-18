import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";

function NewDiary() {

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
                    <Container fluid >
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicTitle">
                                <Form.Label style={{ marginBottom: 20 }}>Write title</Form.Label>
                                <Form.Control type="title" placeholder="Enter Title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDiary">
                                <Form.Label style={{ marginBottom: 20 }}>Write new diray</Form.Label>
                                <Form.Control type="diary" placeholder="Enter Diary" as="textarea" rows={15} />
                            </Form.Group>
                            <div style={{ textAlign: "right" }}>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>

                        </Form>
                    </Container>
                </div>
            </div >
        </div >
    )
}

export default NewDiary;