import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newItemTitle, setNewItemTitle] = useState("");

  const addTodo = () => {
    setTodoList([...todoList, { text: newItemTitle, completed: false }]);
    setNewItemTitle("");
  };

  const removeTodo = (id) => {
    const updatedList = [...todoList];
    updatedList.splice(id, 1);
    return setTodoList(updatedList);
  };

  const toggleCompletion = (id) => {
    const updatedList = [...todoList];
    if ((updatedList[id].completed = !updatedList[id].completed)) {
      return setTodoList(updatedList);
    }
  };

  return (
    <div className="App">
      <h1 className="App-header">TODO List</h1>

      <div className="todo-form">
        <input
          className="todo-form-field"
          type="text"
          placeholder="Type new item..."
          value={newItemTitle}
          onChange={(e) => setNewItemTitle(e.target.value)}
        />
        <button className="todo-add" onClick={addTodo}>
          Add
        </button>
      </div>
      <button className="todo-completed">Show/hide completed</button>
      <ul className="todo-items">
        {todoList.map((todo, id) => (
          <li key={id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
