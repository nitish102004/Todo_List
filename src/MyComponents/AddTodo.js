// AddTodo.js
import React, { useState } from 'react';
import './AddTodo.css';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleAdd = () => {
        if (!title.trim() || !desc.trim()) {
            alert("Both Title and Description are required!");
            return;
        }
        addTodo(title, desc);
        setTitle("");
        setDesc("");
    };

    return (
        <div className="add-todo-container">
            <div className="input-group">
                <input
                    type="text"
                    className="todo-input"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="todo-input"
                    placeholder="Task Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <button
                    className="add-button"
                    onClick={handleAdd}
                >
                    <span className="plus-icon">+</span>
                    Add Task
                </button>
            </div>
        </div>
    );
};