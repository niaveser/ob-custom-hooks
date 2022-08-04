/* Ejercicio 2

Partiendo del hook personalizado useList que se creó en la sesión, ampliadlo con lo siguiente:

Una función clear para limpiar(vaciar) la lista de elementos

Otra función sort para ordenar los elementos.

Una última función que se encargue de invertir los elementos. */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useList from '../hooks/useList';

const List = () => {

    const tasks = useList([])

    const [newTask, setNewTask] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        tasks.push(newTask)
        setNewTask('')


    }

    const handleChange = (event) => {

        setNewTask(event.target.value)


    }

    return (
        <div>
            <h1>Task List</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder='New Task' type='text' value={newTask} onChange={handleChange} />

                <button type='submit'>Create Task</button>
            </form>
            { tasks.isEmpty() 
            ? 
            (<p>Task List is Empty</p>)
            :
            (
                <ul>
                    
                    {tasks.value.map((task, index) => 
                    <li key={index}>
                        <input type='checkbox' onClick={() => tasks.remove(index)} checked={false}/>
                        { task }
                    </li>)}

                </ul>
            )}

            <button onClick={tasks.clear}>Clear List</button>
            <button onClick={tasks.sort}>Sort List</button>
            <button onClick={tasks.invert}>Reverse List</button>
        </div>
    );
};


List.propTypes = {

};


export default List;
