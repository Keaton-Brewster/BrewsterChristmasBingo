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
    gridColumn: "span 5"  // Make card span all columns
  }

  const cageStyle: CSSProperties = {
    display: cageVisible ? "block" : "none",
    gridColumn: "span 5"  // Make generator span all columns
  }

  const backButtonStyle: CSSProperties = {
    display: backVisible ? "block" : "none",
    gridColumn: "1",  // Place back button in first column
    gridRow: "1"      // Place in first row
  }

  const optionButtonsStyle: CSSProperties = {
    display: optionButtonsVisible ? "flex" : "none",
    margin: "1em",
    padding: "1em",
    justifyContent: "center",
    gridColumn: "span 2"  // Each button spans 2 columns
  }

  const containerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",  // 5 equal columns
    gap: "1rem",                            // Space between grid items
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem"
  }

  const headerStyle: CSSProperties = {
    gridColumn: "span 5",  // Make header span all columns
    textAlign: "center",
    margin: "1em 0",
    fontSize: "34px"
  }

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Brewster Family Christmas Bingo</h2>
      <Button style={backButtonStyle} text='Back' handler={(e) => {
        e.preventDefault()
        setCageVisible(false)
        setCardVisible(false)
        setOptionButtonsVisible(true)
        setBackVisible(false)
      }} />
      <div style={{ gridColumn: "2 / span 3", display: "flex", gap: "1rem", justifyContent: "center" }}>
        <Button style={optionButtonsStyle} text='Bingo Card' handler={(e) => {
          e.preventDefault()
          setCardVisible(true)
          setOptionButtonsVisible(false)
          setBackVisible(true)
        }} />
        <Button style={optionButtonsStyle} text='Bingo Cage' handler={(e) => {
          e.preventDefault()
          setCageVisible(true)
          setOptionButtonsVisible(false)
          setBackVisible(true)
        }} />
      </div>
      <div style={{ gridColumn: "2 / span 3", display: "flex", gap: "1rem", justifyContent: "center" }}>
        <Cage style={cageStyle} />
        <Card style={cardStyle} />
      </div>
    </div>
  )
}