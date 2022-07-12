
import React, { useState } from "react";
import { Navbar, Container, Nav, Table, Button, Pagination, PageItem } from "react-bootstrap";

function Main() {
    const onClickTitle = (e) => {
        console.log(e.target.textContent);
    }
    const onClickPaging = (e) => {
        console.log(e)
        if (e.target.id === active.toString()) {
            return
        }
        else {
            const tmp = active;
            console.log(active);
            setActive(e.target.outerText)
        }
    }

    const arr = [];
    for (let i = 0; i < 50; i++) {
        arr[i] = i;
    }
    const [active, setActive] = React.useState("1");

    let items = [];

    for (let number = 1; number <= arr.length / 10; number++) {
        items.push(
            <Pagination.Item onClick={onClickPaging} id={number} key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }



    let dList = arr.slice(active * 10 - 10, active * 10).map((value) => <tr key={value}>< th> {value}</th><th onClick={onClickTitle}>diary title {value}</th><th>date exapmle</th></tr >);



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
                            <tr style={{ fontSize: 20 }}>
                                <th>#</th>
                                <th>Title</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody id="diaryTable">
                            {dList}
                        </tbody>
                    </Table>
                    <div>
                        <Pagination >{items}</Pagination>
                    </div>
                    <div style={{ textAlign: "left", paddingTop: 0 }}>
                        <Button variant="outline-dark">New Dairy</Button>
                    </div>
                </Container>
            </div>
        </div >
    )
}

export default Main;