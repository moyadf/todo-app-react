import { useState } from "react";
export default function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function TodoEdit() {
    const [newValue, setnewValue] = useState(item.title);
    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setnewValue(value);
    }

    function handleClickUpdateTodo() {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }

    return (
      <form className="todoUpdate" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />

        <button
          type="submit"
          className="updateButton"
          disabled={newValue ? "" : "disabled"}
          onClick={handleClickUpdateTodo}
        >
          Update
        </button>
      </form>
    );
  }

  function TodoEl() {
    return (
      <div className="todoItem">
        <div>
          <span className="todoTitle">{item.title}</span>
        </div>

        <div>
          <button className="buttonEdit" onClick={() => setIsEdit(true)}>
            Edit
          </button>
          <button className="buttonDelete" onClick={() => onDelete(item.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="todo">{isEdit ? <TodoEdit /> : <TodoEl />}</div>
    </div>
  );
}
