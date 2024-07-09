import React from 'react';
import './style.css';

function Style() {
    let p = {
        marginLeft: '2rem',
        fontSize: '9rem',
        color: 'green'

    }

  return (
    <div>
        <h2 className="primary text-center fs-2rem">Stylesheet css .</h2>
        <p style={p}>Inline css</p>

        <span className='error'>error code in function component</span>
    </div>
  )
}

export default Style