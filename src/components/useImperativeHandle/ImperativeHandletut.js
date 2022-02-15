import React, { useState } from 'react'
import Button from './button'

// 
// use in reusable components which r active from out side 

const ImperativeHandle = () => {
  const buttonref = useState(null)
  return (
    <div>
    <p>useImperativeHandle tut1</p>
    <button onClick={
      () => {
        buttonref.current.altertoggle()
      }
    }> parent button </button>
    <Button ref={buttonref}/>

    </div>
  )
}

export default ImperativeHandle
