import React, { Component } from 'react'
import Header from './Components/Header';
import ProductList from './Components/ProductList'
import {Container} from 'react-bootstrap';
import './App.css'
import {Route,Routes} from 'react-router-dom';
import New from './Components/New';
import Login from './Components/Login'
import Signup from './Components/Signup'




class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Container className="main-container">
            
              <Routes>
                <Route exact path="/products" element={<ProductList/>}></Route>
                <Route exact path="/products/new" element={<New/>}></Route>
                <Route exact path="login" element={<Login/>}></Route>
                <Route exact path="register" element={<Signup/>}></Route>
            
              </Routes>
             
            
          </Container>
      </div>
    )
  }
}

export default App;
