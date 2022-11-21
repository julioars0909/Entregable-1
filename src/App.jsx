
import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quote from './json/quote.json'
import colors from './json/colors.json'
import ButtonQuote from './components/ButtonQuote'
function App() {


  const getRandom = arr => {

    const random = Math.floor(arr.length * Math.random())
    return arr[random]
  }

  const [quoteRandom, setQuoteRandom] = useState(getRandom(quote))

  const [colorRandom, setcolorRandom] = useState(getRandom(colors))

  console.log(colorRandom)

  const handleClick = () => {
    setQuoteRandom(getRandom(quote))
    setcolorRandom(getRandom(colors))
  }

  const objStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div className="App" style={objStyle}>
      <QuoteBox
        quoteRandom={quoteRandom}
        handleClick={handleClick}
        colorRandom={colorRandom}
      />

    </div>
  )
}

export default App
