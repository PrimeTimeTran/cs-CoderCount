import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  Nav,
  Form,
  Navbar,
  Button,
  NavDropdown,
  FormControl,
} from "react-bootstrap";

export default function Navbarr() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");

  const onSignIn = (e) => {
    e.preventDefault();
    dispatch({ type: "SIGN_IN", payload: { email } });
  };

  const onSignOut = (e) => {
    e.preventDefault();
    dispatch({ type: "SIGN_OUT" });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Codercount</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        {authState.email ? (
          <Form inline onSubmit={onSignOut}>
            {authState.email}
            <Button onClick={onSignOut} variant="outline-danger">
              Sign Out
            </Button>
          </Form>
        ) : (
          <Form inline onSubmit={onSignOut}>
            <FormControl
              type="text"
              placeholder="Email"
              className="mr-sm-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={onSignIn} variant="outline-success">
              Sign In
            </Button>
          </Form>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
