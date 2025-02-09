import React from 'react';

export const Todoitems = ({ todo, onDelete }) => {
    return (
        <div className="container my-3 p-3 border rounded">
            <h5>{todo.title}</h5>
            <p className="mb-3">{todo.desc}</p>
            <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(todo)}
            >
                Delete
            </button>
        </div>
    )
}