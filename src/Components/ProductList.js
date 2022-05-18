
import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from './Product';
import axios from 'axios';


class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    name: 'Drone',
                    price: '3000',
                    img: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyb25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                },
                {
                    name: 'Laptop',
                    price: "65000",
                    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                },
                {
                    name: 'Bike',
                    price: "50000",
                    img: "https://images.unsplash.com/photo-1505705694340-019e1e335916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                },
                {
                    name: "Jacket",
                    price: "3000",
                    img: "https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487?b=1&k=20&m=163208487&s=170667a&w=0&h=YyOFKwoWyLSVO-cXE3goQ4el6K8Cvs082gjmUSouvOQ=",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                },
                {
                    name:"Notebook",
                    price:"1000",
                    img:"https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm90ZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
                    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                },
                {
                    name:"Rackets",
                    price:"2000",
                    img:"https://media.istockphoto.com/photos/tennis-racket-on-top-of-two-tennis-balls-on-a-blue-court-by-the-net-picture-id1316486195?b=1&k=20&m=1316486195&s=170667a&w=0&h=8VreABLTjdmpYd4cLbmfRAlHWRqOS3iKUjdlD43ITdU=",
                    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                },
                {
                    name:"Shoes",
                    price:"10000",
                    img:"https://media.istockphoto.com/photos/blue-sneakers-isolated-on-white-background-picture-id1308274455?b=1&k=20&m=1308274455&s=170667a&w=0&h=S3UYmEJ1hUri2rB8jRhJ4wNY31lMrHysLHbl9YD8j_Q=",
                    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                },
                {
                    name:"Dress",
                    price:"10000",
                    img:"https://media.istockphoto.com/photos/artistic-processing-fantasy-girl-princess-in-pink-dress-stands-in-picture-id1337811824?b=1&k=20&m=1337811824&s=170667a&w=0&h=69WQ7KJtNGa4URux8YpAQqhmiat0En_xCxU0ZGeKgYo=",
                    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                }
            ]
        }
    }


    
    render() {

        const products = this.state.products.map((product) => {
            return <Col lg={3} md={6}>
                <Product
                    name={product.name}
                    price={product.price}
                    img={product.img}
                    desc={product.desc}

                />
            </Col>
        })
        return (
            <Row>
                {products}
            </Row>
        )
    }
}

export default ProductList;