import React, { useState } from 'react';
import useCounter from '../hooks/useCounter';


/*Ejercicio 1

El objetivo de este ejercicio es que creéis un contador utilizando el hook personalizado useCounter, el contador deberá mostrar en todo momento su valor, además deberéis implementar las funciones:

increment, para aumentar su valor.

decrement, para reducirlo.

reset, para reiniciar su estado.

Una vez tengáis esto, también añadiréis:

Un valor máximo y uno mínimo.

Un valor predeterminado para el contador.

Añadir un step para el incremento o decremento. */

const Counter = () => {

    const counter = useCounter(0)


    const handleChange = (event) => {
        counter.changeStep(parseInt(event.target.value))

    }

    const handleSubmit = (event) => {
        event.preventDefault()


    }

    return (
        <div>
            <h1>Counter</h1>
            <span style={{fontSize:'30px'}}>{counter.count}</span>
            
            <div>  
            <button onClick={counter.increment}>Increment</button>
            <button onClick={counter.decrement}>Decrement</button>
            <button onClick={counter.reset}>Reset</button>
            <h6>Max number is 100. Min number is -100</h6>
            </div>
            <div>
                <h5>Step:</h5>
                <form onSubmit={handleSubmit}>
                    <input placeholder='Set Step' type='number' onChange={handleChange}/>
                </form>

                
                
            </div>
          
        </div>
    );
}

export default Counter;
