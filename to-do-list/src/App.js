// App.js

import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/form/form";
import TodoList from "./components/todolist/todolist";

function App() {
  const [todos, setTodos] = useState(() => {
    const localTodosString = localStorage.getItem("todos");
    if (localTodosString === null) return [];
    return JSON.parse(localTodosString);
  });

  const addToDo = (title) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleChecked = (id, completed) => {
    setTodos((currentTodos) =>
      currentTodos.map((item) =>
        item.id === id ? { ...item, completed } : item
      )
    );
  };

  const delItem = (id) => {
    setTodos((currentTodos) => currentTodos.filter((item) => item.id !== id));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 ">
      <div className="col-sm-12 col-md-8 col-lg-6">
        <div className="App  rounded p-4">
          <Form addToDo={addToDo} />
          <TodoList
            todos={todos}
            toggleChecked={toggleChecked}
            delItem={delItem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
