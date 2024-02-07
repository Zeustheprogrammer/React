// TodoList.js

import React from "react";
import TodoItem from "../todoitem/todoitem";

const TodoList = ({ todos, toggleChecked, delItem }) => {
  return (
    <div className="todo-list-container">
      {todos.length === 0 ? (
        <p>No todos</p>
      ) : (
        <ul className="list-group mb-0">
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              completed={item.completed}
              toggleChecked={toggleChecked}
              delItem={delItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
