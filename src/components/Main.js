
import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Table, Button, Pagination, PageItem } from "react-bootstrap";

function Main() {

    const [active, setActive] = React.useState("1");
    const [btns, setBtns] = React.useState(1);
    const [amount, setAmount] = React.useState(10)

    const onClickNewDiary = () => {
        window.location.href = "/newdiary"
    }

    const onClickTitle = (e) => {
        console.log(e.target.textContent);
    }
    const onClickPaging = (e) => {
        setActive(e.target.id);
    }
    const onSelect = (e) => {
        setAmount(e.target.value)
    }
    const arr = [];
    for (let i = 0; i < 71; i++) {
        arr[i] = i;
    }
    useEffect(() => {
        setBtns(arr.length / amount >= 1 ? arr.length / amount : 1);
    }, [arr.length, amount])

    useEffect(() => {
        const test = document.getElementById("pageBtn");

        while (test.firstChild) {
            test.removeChild(test.firstChild);
        }
        for (let i = 0; i < btns; i++) {
            const button = document.createElement("button");
            button.innerText = `${i + 1}`;
            button.id = `${i + 1}`
            if (i !== 0) { button.className = "button" }


            if (button.id === active) {
                button.style.backgroundColor = "#495057";
                button.style.color = "white";
            }
            button.addEventListener('click', onClickPaging)
            test.appendChild(button);
        }
    }, [btns, active])



    let dList = arr.slice(active * amount - amount, active * amount).map((value) => <tr key={value}>< th> {value}</th><th onClick={onClickTitle}>diary title {value}</th><th>date exapmle</th></tr >);

    return (
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

            <div>
                <Container style={{ paddingTop: 50 }}>
                    <div style={{ textAlign: "right", marginBottom: 5 }}>
                        <select onChange={onSelect}>
                            <option value='10'> 10개 보기</option>
                            <option value='15'> 15개 보기</option>
                            <option value='20'> 20개 보기</option>
                        </select>
                    </div>
                    <Table striped bordered hover size="sm" >
                        <thead>
                            <tr style={{ fontSize: 20 }}>
                                <th style={{ width: 40 }}>#</th>
                                <th>Title</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody id="diaryTable">
                            {dList}
                        </tbody>
                    </Table>
                    <div id="pageBtn" style={{ textAlign: "center" }}>
                    </div>
                    <div style={{ textAlign: "right", paddingTop: 10 }}>
                        <Button variant="outline-dark" onClick={onClickNewDiary}>New Dairy</Button>
                    </div>
                </Container >
            </div >
        </div >
    )
}

export default Main;