import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import body from "../css/test.css"

function Register() {

    return (
        <div className="body">
            <Container fluid>
                <Row style={{ border: 1, borderStyle: "solid", borderColor: "black" }}>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupId">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="id" placeholder="Input Id" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPasswordCheck">
                                <Form.Label>Password Check</Form.Label>
                                <Form.Control type="passwordCheck" placeholder="Password Check" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupUsername">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="uername" placeholder="Input Username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Input Email" />
                            </Form.Group>
                        </Form>
                        <div style={{ textAlign: "center", marginBottom: 20 }}>
                            <Button variant="outline-dark">Register</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register;