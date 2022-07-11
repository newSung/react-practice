import { Navbar, Container, Nav } from "react-bootstrap";

function Home() {

    return (
        <div>
            <div>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand>Diary</Navbar.Brand>
                            <Nav>
                                <Nav.Link href="/home">Home</Nav.Link>
                                <Nav.Link href="/settings">Settings</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            </div >
            <h1>Home</h1>
        </div >
    )
}

export default Home;