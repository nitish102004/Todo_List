import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done"
    }
  ]);

  // Add new todo
  const addTodo = (title, desc) => {
    const newTodo = {
      sno: todos.length + 1,
      title: title,
      desc: desc
    };
    setTodos([...todos, newTodo]);
  };

  // Delete todo
  const onDelete = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo.sno !== todoToDelete.sno));
  };

  return (
    <>
      <Header title="My Todo List" searchBar={false} />

      <div className="container my-4">
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
      </div>

      <Footer />
    </>
  );
}

export default App;