import React , {useState , useEffect} from 'react'
import axios from 'axios'
// useEffect r use in api call and useEffect was call when html component render
const Effecttut1 = () => {
  const [data , setdata] =  useState("")



  useEffect(()=>{
    axios.get("http://jsonplaceholder.typicode.com/comments").then((response) =>{
      setdata(response.data[4].name)
      // console.log(response.data)
    })
  })



  return (
    <>
    <div>useEffect tut 1</div>
    
    <p> {data} </p>

    </>
  )
}

export default Effecttut1