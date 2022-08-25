import { useState } from "react";
import Todo from "./todo";

import "./todoApp.css";

export default function TodoApp() {
  {
    /*
      el useState es una función que nos permite crear un estado
      el primer parámetro es el valor inicial del estado
      el segundo parámetro es una función que permite actualizar el estado
    */
  }
  // aqui guardare el nombre del todo
  const [title, setTitle] = useState("");
  // aqui guardare el estado de la lista de todos
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setTitle(e.target.value);
  }

  // función que permite agregar un nuevo todo
  function handleSubmit(e) {
    e.preventDefault();

    let uuid = crypto.randomUUID();
    console.log(uuid);
    // aqui guardare el nuevo todo, dentro de un objeto
    const newTodo = {
      id: uuid,
      title: title,
      completed: false,
    };

    const temp = [...todos];
    temp.unshift(newTodo);
    setTodos(temp);

    console.log("newTodo ->", newTodo);

    //setTodos([...todos, newTodo]);
    setTitle("");
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id !== id);
    console.log("temp --------->", temp);
    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <h1 className="todoContainerTitle">Todo Create App - React 😎</h1>
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <button
          onClick={handleSubmit}
          className="todoCreate"
          disabled={title ? "" : "disabled"}
          type="submit"
        >
          Create todo
        </button>
      </form>

      <div className="todosList">
        {todos.length ? "Listado de Tareas 😍" : "No hay tareas aún 😔"}
        {todos.map((item, index) => (
          <Todo
            key={index}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <footer>2022 - Creado con amor y pasion ❤️ 💻</footer>
    </div>
  );
}
