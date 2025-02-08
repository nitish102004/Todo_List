import React from 'react';

export const Todoitems = ({ todos, onDelete }) => {
    return (
        <div className="container my-3 p-3 border rounded">
            <h5>{todos.title}</h5>
            <p className="mb-3">{todos.desc}</p>
            <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(todos)}  // Changed to arrow function
            >
                Delete
            </button>
        </div>
    )
}