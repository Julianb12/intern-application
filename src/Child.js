import React, { useState } from 'react'
import './Child.css'

function Child(props) {

  const [place, setPlace] = useState(0)

  function handleColorChange() {
    let colors = [
      '#DC143C',
      '#B8860B',
      '#00008B',
      '#006400',
      '#8B008B'
    ]
    return (
      props.setColor(colors[Math.floor(Math.random()*colors.length)])
    )
  }
  
  if (props.blink === true){
    return (
      <div className="main">
        <button style={{ backgroundColor : props.color, marginTop : place }} 
          onClick={handleColorChange}>
         change this 
        </button>
      </div>
    )
  }else{
    return (
      <div className="main">
        <button style={{ backgroundColor : props.color, marginTop : place }}
          onClick={() => setPlace(place + 25)}>
          change that 
        </button>
      </div>
    )
  }
}

export default Child