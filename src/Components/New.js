import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios, { Axios } from 'axios';

class New extends Component {

  constructor(props){
    super(props);
    this.state={
      name:'',
      img:'',
      price:'',
      desc:''
    }
  }


  changeHandler=(e)=>{
    // console.log(e.target.name);

    this.setState(
      {
        [e.target.name]:e.target.value
      }
    )
  }
  formSubmitHandler=async(e)=>{
     e.preventDefault();
    // console.log(this.state);
    
    await axios.get('/products',this.state);
    console.log("New Prodcut Created")

  }



  render() {

   
    return (
      <div>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Form onSubmit={this.formSubmitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Product Name" onChange={this.changeHandler}/>
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Img Url</Form.Label>
                <Form.Control type="text" name="img"placeholder="Img Url" onChange={this.changeHandler}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price"placeholder="Price" onChange={this.changeHandler}/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Product Descrption</Form.Label>
                <Form.Control as="textarea" row={3} name="desc" onChange={this.changeHandler}/>
              </Form.Group>
            
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>

          </Col>
          <Col lg={3}></Col>
        </Row>

      </div>
    )
  }
}


export default New;