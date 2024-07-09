// function component
import React from "react";

// function FComponent(){
//     return <h3>This is a function components with normal function</h3>
// }

// arrow function 
const FComponent = (props) => {
    // console.log(props);

    return (
        <div>

            {/* <h3>This is a arrow function</h3>    */}

            {/*  props */}
            <h4>User for props = {props.name} </h4>
            {props.children}
        </div>
        
    )
}

export default FComponent