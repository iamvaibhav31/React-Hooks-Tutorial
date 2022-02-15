import React , {useReducer} from 'react'
// useReducer is use for reduce the complex logic of multiple useState 
// it mean when we have to use somany useState .useReduce can handle somany useState at once
const reducer = (state , action) =>{
    switch (action.type) {
        case "INCREMENT":
            return {count:state.count+1 ,showtext:!state.showtext}
        case "TOGGLETEXT":
            return {count:state.count ,showtext:!state.showtext}
        default:
            return state
    }
}

const Reducertut1 = () => {
    const [State , dispatch] = useReducer(reducer , {count:0 , showtext:true})

  return (
      <>
        <p> useReducer tut </p>
        <p>
            {State.count}
        </p>
        <button onClick={
            () => {
                dispatch({type:"INCREMENT"})
                // dispatch({type:"TOGGLETEXT"})
            }
        }> click here </button>

        {State.showtext && <p> This is a text </p>}
     </>
  )
}

export default Reducertut1