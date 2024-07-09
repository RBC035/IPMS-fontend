import React, { Component } from "react";

class State extends Component {

    constructor(){
        super();
        this.state = {
            message: 'Welcome visitor. '
        }
    }

    changeMessage(){
        this.setState({
            message : 'Thank you for visiting'
        })
    }

    render(){
        return (
           <div>
                 <h5>{this.state.message} </h5>
                 <button onClick={()=> this.changeMessage()}>Send value</button>
           </div>
        )
    }
}

export default State;
