import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Footer from './comp/Footer';
import Header from './comp/Header';
import AllProducts from './comp/AllProducts';
import Sidebar from './comp/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
         <Header/> 
        </div>

        <div className="row">
         <AllProducts/> <Sidebar />
        </div> 

        <div className="row">
          <Footer/> 
        </div>

 
      </div>
    );
  }
}

export default App;
