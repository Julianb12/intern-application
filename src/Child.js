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
  
  // function handlePlaceChange() {

  //   {place = place + 10}
  //   return place;
  // }
 
  if (props.blink === true){
    return (
      <div>
        <button style={
          {backgroundColor:props.color, padding : 15 , marginTop : place }
          } 
          onClick={handleColorChange}>
         change this 
        </button>
  
      </div>
    )
  }else{
    return (
      <div>
        <button style={{ backgroundColor : props.color, padding : 15 , marginTop : place }}
          onClick={() => setPlace(place + 10)}>
          change that 
        </button>
  
      </div>
    )
  }

   
}

export default Child