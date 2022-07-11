import { Navbar, Container, Nav } from "react-bootstrap";

function Settings() {

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
            <h1>Settings</h1>
        </div >
    )
}

export default Settings;