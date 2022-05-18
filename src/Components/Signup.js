import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import './Signup.css'

function Signup() {
  return (
    <div>
      <Row>
        <Col lg={4}>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <img className="imgset" src="https://media.istockphoto.com/photos/black-paper-written-with-text-sign-up-now-isolated-on-wooden-picture-id1390694456?b=1&k=20&m=1390694456&s=170667a&w=0&h=hXZ8tEX_tGWMAFk7KBnniPPYbOK9-6Ffh3BiAsmbRoE="></img>
        </Col>
        <Col lg={6}>
          <Form>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mobile Number/Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Enter 10 digit Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </div>
  )
}

export default Signup;