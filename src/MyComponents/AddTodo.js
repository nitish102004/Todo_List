import React, { useState } from 'react';
import '../App.css';

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
        <div className="add-todo-container text-center">
            <h2 className="mb-4">Add a Task</h2>
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
                    rows="3"
                />
                <button
                    className="add-button mt-3"
                    onClick={handleAdd}
                >
                    + Add Task
                </button>
            </div>
        </div>
    );
};