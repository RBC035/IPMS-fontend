import React from 'react'

function FunctionClick() {

    let clickHandler = () => {
        console.log('btn is cliked ');
    }

  return (
    <div>
        <button onClick={clickHandler}>Click</button> 
        {/* <button onClick={clickHandler()}>Click</button>  this is a mistake called function call  */}
    </div>
  )
}

export default FunctionClick