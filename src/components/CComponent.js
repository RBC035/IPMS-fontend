//  class component
import React, {Component} from "react";

class CComponent extends Component{
    render(){
        return (
            <div>
                {/*==  class component */}
                {/* <h4>This is a class component</h4> */}

                {/* == props in class component */}

                <h5>This {this.props.address}</h5>
                {this.props.children}


            </div>
            
        )
    }
}

export default CComponent;