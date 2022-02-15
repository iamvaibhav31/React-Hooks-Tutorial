import React , {useState , useEffect} from 'react'
import axios from 'axios'
// useEffect r use in api call and useEffect was call when html component render
const Effecttut2 = () => {
    
  const [data , setdata] =  useState("")
  const [count , setcount] = useState(0)


  useEffect(()=>{
    axios.get("http://jsonplaceholder.typicode.com/comments").then((response) =>{
      setdata(response.data[count].name)
      console.log("api called")
    })
  } , [count])// the array emplice that useEffect was trigger when the value of useState change 



  return (
    <>
    <div>useEffect tut 2</div>
    
    <p> {data} </p>
    <p>{count}</p>
    <button onClick={() => {
        setcount(count+1)
    }}>next</button>
    </>
  )
}

export default Effecttut2