import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className="mx-auto  w-25">
    <h3>Please Register</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" required placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" name="name" required placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" required placeholder="Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name='accept' label={<Link to='/'>Accept Terms & Conditions</Link>} />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <Form.Text>
        Already Have an Account
        <Link className="text-danger ms-2" to='/login'>Login</Link>
      </Form.Text>
        <Form.Text className="text-danger">
        
      </Form.Text>
        <Form.Text className="text-success">
        
      </Form.Text>
      </Form>
    </Container>
    );
};

export default Register;