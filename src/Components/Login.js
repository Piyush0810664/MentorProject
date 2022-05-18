import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import './Login.css'

function Login() {
  return (
    <div>
      <Row>
        <Col lg={4}>
          <h1>Login </h1>
          <img  className="imgset" src="https://media.istockphoto.com/photos/login-screen-username-and-password-in-internet-browser-on-computer-picture-id905301022?b=1&k=20&m=905301022&s=170667a&w=0&h=8PndgSPSAN8Gt1AMqIUW_VVNTdYwy_xOtuE4yDSbwpI="></img>
        </Col>
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
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

export default Login;
