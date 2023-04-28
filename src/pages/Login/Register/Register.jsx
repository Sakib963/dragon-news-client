import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useState } from "react";

const Register = () => {
  const { createUser, updateInfo } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleCheckbox = event => {
    setAccepted(event.target.checked);
  }

  const handleRegistration = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    form.reset();

    console.log(name, email, password, photo)
    createUser(email, password)
    .then(result => {
      const createdUser = result.user;
      updateInfo(name, photo)
      .then(result => {
        console.log('Profile Updated');
      })
      .catch(error => {
        console.log(error)
      })
      
      console.log(createdUser)

    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <Container className="mx-auto  w-25">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegistration}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            name="name"
            required
            placeholder="Your Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            required
            placeholder="Photo URL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleCheckbox}
            type="checkbox"
            name="accept"
            label={<>Accept <Link to="/terms">Terms & Conditions</Link></>}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!accepted}>
          Submit
        </Button>
        <br />
        <Form.Text>
          Already Have an Account
          <Link className="text-danger ms-2" to="/login">
            Login
          </Link>
        </Form.Text>
        <Form.Text className="text-danger"></Form.Text>
        <Form.Text className="text-success"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
