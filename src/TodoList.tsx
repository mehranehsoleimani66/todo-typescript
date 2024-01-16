import React, { useState } from "react";
import "./todo.css";
interface item {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodo] = useState<item[]>([
    { id: 1, text: "Learn English", completed: false },
    { id: 2, text: "watch movie", completed: false }
  ]);
  const [task, setTask] = useState<string>("");
  const tagglehandler = (id: number) => {
    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  const handleSumit = () => {
    const newtask: item = { id: Date.now(), text: task, completed: false };
    setTodo([...todos, newtask]);
  };
  return (
    <div className="container">
      <span className="title">MY TODO LIST</span>
      <ul className="todo">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => tagglehandler(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <div className="hold">
        <input
          type="text"
          placeholder="add new task..."
          className="input"
          onChange={(e) => setTask(e.currentTarget.value)}
        />
        <button className="addbtn" onClick={handleSumit}>
          AddTask
        </button>
      </div>
    </div>
  );
};

export default TodoList;
