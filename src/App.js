import { useState } from 'react';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';

function App() {
  const initialTodos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done"
    },
    {
      sno: 3,
      title: "Go to the Tapri",
      desc: "You need to go to the Tapri to get this job done"
    }
  ];

  // State management for todos
  const [todos, setTodos] = useState(initialTodos);

  const onDelete = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo.sno !== todoToDelete.sno));
    console.log("Deleted todo:", todoToDelete);
  }

  return (
    <>
      <Header title="My TodoS List" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;