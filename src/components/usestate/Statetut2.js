import React , {useState} from 'react'

const Tutorial2 = () => {
    const [inputvalue , setinputvalue] = useState("")

    let onchange = (event) =>{
        // when we onchange fun the default parameter is event it help use to take the current value of that event
        // console.log(event.target.getAttribute('value'));
        setinputvalue(event.target.value)
    }
  return (
    <>
    <p>UseState Tut 2</p>  

    <input placeholder='enter something......' onChange={onchange} />

    <p> {inputvalue} </p>

    </>
  )
}

export default Tutorial2