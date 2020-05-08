import React from 'react';
import './Child.css'

function Child(props) {

  function handleColorChange() {
    return (
      props.setColor('#A52A2A')
    )
  }
  
  function handlePlacementChange() {
    
  }
 
  if (props.blink === true){
    return (
      <div>
        <button onClick={handleColorChange}>
          change color
        </button>
  
      </div>
    )
  }else{
    return (
      <div>
        <button onClick={handleColorChange}>
          change placement
        </button>
  
      </div>
    )
  }

   
}

export default Child