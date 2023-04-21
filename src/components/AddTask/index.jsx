import { useState } from "react";
import "./style.css";

const AddTask = ({ tasks, setTasks }) => {
  const [value, setValue] = useState("");

  const addNewTask = (e) => {
    e.preventDefault();

    if (value.trim()) {
      setTasks([...tasks, { value: value, done: false }]);
    }

    setValue("");
  };

  return (
    <form className="add-task-container" onSubmit={addNewTask}>
      <input
        className="add-task"
        type="text"
        placeholder="Add a new task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="add-task-btn">+</button>
    </form>
  );
};

export default AddTask;
