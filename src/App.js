import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodoList([...todoList, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const removeTodo = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    return setTodoList(updatedList);
  };

  const toggleCompletion = (index) => {
    const updatedList = [...todoList];
    if ((updatedList[index].completed = !updatedList[index].completed)) {
      return setTodoList(updatedList);
    }
  };

  return (
    <div className="App">
      <h1 className="header">TODO List</h1>
      <div className="field">
        <input
          className="field__add"
          type="text"
          placeholder="Type new item..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="add" onClick={addTodo}>
          Add
        </button>
      </div>
      <button className="completed">Show/hide completed</button>
      <ul className="items">
        {todoList.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
