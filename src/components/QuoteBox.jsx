import React from 'react'
import ButtonQuote from './ButtonQuote'
const QuoteBox = ({ quoteRandom, handleClick, colorRandom, }) => {

  const objStyle = {
    color: colorRandom
  }
  const objStyleBtn = {
    backgroundColor: colorRandom
  }

  return (

    <article style={objStyle}
      className='card' >
      <i className=" icon fa-solid fa-quote-left"></i>
      <p className='card--quote' >{quoteRandom.quote}</p>
      <h1 className='card--author' >{quoteRandom.author}</h1>
      <ButtonQuote
        objStyle={objStyleBtn}
        handleClick={handleClick}
      />

    </article >

  )
}

export default QuoteBox