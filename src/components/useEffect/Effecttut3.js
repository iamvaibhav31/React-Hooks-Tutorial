import React , {useState , useReducer , useEffect} from 'react'
import axios from 'axios'


const reducer = (state , action) =>{
    switch (action.type) {
        case "FETCH":
            let data1 = action.payload.data
            return {count:state.count,name:data1[state.count].name , email:data1[state.count].email , body:data1[state.count].body}
        case "NEXT":
            let data2 = action.payload.data
            return {count:state.count+1,name:data2[state.count].name , email:data2[state.count].email , body:data2[state.count].body}
        default:
            return state
    }
}
const Effecttut3 = () => {
    
    const [State , dispatch] = useReducer(reducer , {count:0,name:'',email:'',body:''})
    const [featch , setfeatch] = useState("")
  
    useEffect(()=>{
      axios.get("http://jsonplaceholder.typicode.com/comments").then((response) =>{
        // setdata(response.data[count].name)
        dispatch({type: 'FETCH', payload: {data: response.data}})
        setfeatch(response.data)
        // console.log("api called")
      })
    } , [])// the array emplice that useEffect was trigger when the value of useState change 
  
  
  
    return (
      <>
      <div>useEffect tut 3</div>

      <p>Comments API Data</p>
      <p>Name: {State.name} </p>
      <p>Email: {State.email} </p>
      <p>Body: {State.body} </p>

      <p>{State.count}</p>
      <button onClick={() => {
          dispatch({type: 'NEXT', payload: {data: featch}})
      }}>next</button>
      </>
    )
}

export default Effecttut3