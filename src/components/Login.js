import React, { useState } from "react";
import { Container, Row, Col, Form, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import body from "../css/test.css"




function Login() {

    const [InputId, setId] = useState('');
    const [InputPw, setPw] = useState('');
    const onChangeId = (e) => {
        setId(e.target.value);
    }
    const onChangePw = (e) => {
        setPw(e.target.value);
    }
    const onClickLog = () => {
        if (InputId === 'test' && InputPw === "test") {
            // <Link to="/main"></Link>
            window.location.href = "/main"
        }
        else {
            handleShow();

        }

    }
    const onClickReg = () => {
        window.location.href = "/react-practice/register";
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="body">
            <Container fluid >
                <Row style={{ border: 1, borderStyle: "solid", borderColor: "black", borderRadius: 15 }}>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupId">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="id" placeholder="Id" onChange={onChangeId} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={onChangePw} />
                            </Form.Group>
                        </Form>
                        <div style={{ textAlign: "center", marginBottom: 20 }}>
                            <Button style={{ marginRight: 20 }} variant="outline-dark" onClick={onClickLog}>Login</Button>
                            <Button variant="outline-dark" onClick={onClickReg}>Register</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>Wrong account</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


        </div >
    )
}

export default Login;