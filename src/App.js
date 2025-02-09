import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, desc) => {
    const newTodo = {
      sno: todos.length + 1,
      title: title,
      desc: desc
    };
    setTodos([...todos, newTodo]);
  };

  const onDelete = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo.sno !== todoToDelete.sno));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header title="My Todo List" searchBar={false} />

      <main className="flex-grow-1 d-flex align-items-center">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-8 main-content">
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;