import { useState } from "react";


const useCounter = (initialCount = 0) => {


    const [count, setCount] = useState(initialCount);

    const [step, setStep] = useState(3)



    const increment = () => {
        setCount(count + step)
        
        if ((count + step) >= 100) {
            setCount(100)}

    }
    const decrement = () => {
        setCount(count - step)
        if ((count - step) <= -100) {
            setCount(-100)
        }  
    }
    const reset = () => {

        setCount(0)

    }

    const changeStep = (newStep) => {
        setStep(newStep)
    }

    return {count, increment, decrement, reset, step, changeStep}
}


export default useCounter