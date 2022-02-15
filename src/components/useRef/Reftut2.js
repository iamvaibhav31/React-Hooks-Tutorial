import React , {useRef} from 'react'

const Reftut2 = () => {
    const inputref = useRef(null)

    const onclick = () =>{
        inputref.current.value = "" 
        // console.log(inputref)
    }
      return (
          <>
       <div>
            <p>useRef tut 1</p>
        
            <input type="text"  placeholder='type something.......' ref={inputref}/>
    
        </div>
        <button onClick={onclick}>change</button>
          </>
     
    
      )
}

export default Reftut2