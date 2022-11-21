import React from 'react'

const Button = ({ objStyle, handleClick }) => {



    return (
        <button
            style={objStyle} className='card--btn'
            onClick={handleClick}>&gt;
        </button>
    )
}

export default Button