import { useState } from "react"

export default function Counter(){

    let [count, setCount]=useState(0)
    let [incresing, setIncrease]=useState(1)

    function handler1(){
        
     setCount(count+incresing)
   
    }

    function handler2(){
        
     setCount(count-incresing)
   
    }

    function increaseBy(){
    setIncrease(incresing+1)
    }
    return (
        <div>
        <h1>Counter is:{count}</h1>
        <button onClick={handler1}>increaseby</button><br />
        <button onClick={handler2}>Decrease</button>

        <div>
        <h1>Counter is:{incresing}</h1>
        <button onClick={increaseBy}>IncreasyBy</button>
        </div>
        </div>

       
    )
}
    