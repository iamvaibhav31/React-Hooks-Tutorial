import React , {useState} from 'react'

const Tutorials = () => {
    // this methord are not working properly because after click in increment button the count value was not 
    // change in screen but it is change in console
    // let counter = 0
    // const increment = ()=>{
    //     counter = counter +1
    //     console.log(counter)
    // }

    const [counter , setcounter] = useState(0)
    const increment = ()=>{
        setcounter(counter+1)
    }
    return (
        <>
        <p> UseState Tut 1 </p>
        <p>{counter}</p>  
        <button onClick={increment}>Increment</button>          
        </>

    )
}

export default Tutorials