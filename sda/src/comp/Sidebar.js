import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';

class Sidebar extends Component {

    state={
        comp:"login"
    }


  render() {
    if(this.state.comp=="login")
    {
        return (
            <div className="col s4">
            <h5>hello guest please <button  onClick={this.switchComp.bind(this,'login')}   className="btn">login</button>
             or <button  onClick={this.switchComp.bind(this,'register')} className="btn">register</button></h5>
            <Login  sidebarLogin={this.userLoggedIn.bind(this)}   /> 
            </div>
        );
    }
   
    else if(this.state.comp=="register")
    {
        return (
            <div className="col s4">
            <h5>hello guest please <button  onClick={this.switchComp.bind(this,'login')}   className="btn">login</button>
             or <button  onClick={this.switchComp.bind(this,'register')} className="btn">register</button></h5>
            <Register     /> 
            </div>
        );
    } 
    else
    {
        return (
            <div className="col s4">
            <h5>connected</h5>
            </div>
        );
    }
   
  }



  userLoggedIn()
  {
        this.setState({comp:"loggedin"})
  }


  switchComp(userChoiceComp)
  {
        this.setState({comp:userChoiceComp});
  }




}

export default Sidebar;
