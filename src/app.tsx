import './app.css'
import Button from './components/button'
import Cage from './components/cage'
import Card from './components/card'
import { useState } from 'preact/hooks'
import { CSSProperties } from 'preact/compat'

export function App() {
  const [cardVisible, setCardVisible] = useState(false)
  const [cageVisible, setCageVisible] = useState(false)
  const [backVisible, setBackVisible] = useState(false)
  const [optionButtonsVisible, setOptionButtonsVisible] = useState(true)

  const cardStyle: CSSProperties = {
    display: cardVisible ? "block" : "none",
    width: '100%'
  }

  const cageStyle: CSSProperties = {
    display: cageVisible ? "block" : "none",
    width: '100%'
  }

  const backButtonStyle: CSSProperties = {
    display: backVisible ? "block" : "none"
  }

  const optionButtonsStyle: CSSProperties = {
    display: optionButtonsVisible ? "block" : "none",
    width: '100%'
  }

  const resetView = (e: Event) => {
    e.preventDefault()
    setCageVisible(false)
    setCardVisible(false)
    setOptionButtonsVisible(true)
    setBackVisible(false)
  }

  const showCard = (e: Event) => {
    e.preventDefault()
    setCardVisible(true)
    setOptionButtonsVisible(false)
    setBackVisible(true)
  }

  const showCage = (e: Event) => {
    e.preventDefault()
    setCageVisible(true)
    setOptionButtonsVisible(false)
    setBackVisible(true)
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div className="flex flex-col items-center gap-4 sm:gap-6">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold">
          Brewster Family Christmas Bingo
        </h2>

        {/* Back Button */}
        {backVisible && (
          <div className="w-full sm:w-auto">
            <Button
              style={backButtonStyle}
              text='Back'
              handler={resetView}
            />
          </div>
        )}

        {/* Option Buttons */}
        {optionButtonsVisible && (
          <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              style={optionButtonsStyle}
              text='Bingo Card'
              handler={showCard}
            />
            <Button
              style={optionButtonsStyle}
              text='Bingo Cage'
              handler={showCage}
            />
          </div>
        )}

        {/* Game Components */}
        <div className="w-full">
          {cardVisible && <Card style={cardStyle} />}
          {cageVisible && <Cage style={cageStyle} />}
        </div>
      </div>
    </div>
  )
}