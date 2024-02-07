import React from "react";
import { useState } from "react";

const Form = ({ addToDo }) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    addToDo(newItem);
    setNewItem("");
  };
  return (
    <div className="Form">
      <h6 className="mb-3">Todo List</h6>
      <form
        className="d-flex justify-content-center align-items-center mb-3"
        onSubmit={handleSubmit}
      >
        <div className="form-outline flex-fill mt-3">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              value={newItem}
              placeholder="Task"
              onChange={(e) => setNewItem(e.target.value)}
            />
            <label className="form-label text-black" htmlFor="floatingInput">
              What do you need to do today?
            </label>
          </div>
        </div>
        <button className="btn btn-primary btn-lg ms-2" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
