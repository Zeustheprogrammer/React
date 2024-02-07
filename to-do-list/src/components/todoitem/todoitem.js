import React from "react";

const TodoItem = ({ id, title, completed, toggleChecked, delItem }) => {
  return (
    <li
      key={id}
      className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
    >
      <div className="d-flex align-items-center">
        <input
          id={`checkbox-${id}`}
          className="form-check-input me-2"
          type="checkbox"
          value=""
          aria-label="..."
          defaultChecked={completed}
          onChange={(e) => toggleChecked(id, e.target.checked)}
        />
        <label htmlFor={`checkbox-${id}`}>
          {completed ? <s>{title}</s> : `${title}`}
        </label>
      </div>
      <i className="fas fa-times text-primary" onClick={() => delItem(id)} />
    </li>
  );
};

export default TodoItem;
