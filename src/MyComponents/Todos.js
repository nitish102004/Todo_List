import React from 'react';
import { Todoitems } from './Todoitems';

export const Todos = (props) => {
    return (
        <div className="container">
            <h1 className="my-4 text-center">Todos List</h1>
            {props.todos.length === 0 ?
                <div className="alert alert-info">No Todos to display</div> :
                props.todos.map((todo) => (
                    <Todoitems
                        key={todo.sno}
                        todo={todo}
                        onDelete={props.onDelete}
                    />
                ))
            }
        </div>
    )
}