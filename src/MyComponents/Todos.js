import React from 'react';
import { Todoitems } from '../MyComponents/Todoitems';

export const Todos = (props) => {
    return (
        <div className="container">
            <h1>Todos List</h1>
            {props.todos.length === 0 ? "No Todos to display" :
                (
                    props.todos.map((todo) => (
                        <Todoitems
                            key={todo.sno}  // Changed from todos.sno to todo.sno
                            todos={todo}    // Changed from todos to todo
                            onDelete={props.onDelete}
                        />
                    ))
                )
            }
        </div>
    )
}