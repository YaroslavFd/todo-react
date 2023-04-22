import { useState } from "react";
import uuid from "react-uuid";
import TaskList from "../TaskList";
import AddTask from "../AddTask";
import BtnDeleteAll from "../BtnDeleteAll";

import "./styles.css";

const Content = () => {
  const [tasks, setTasks] = useState([
    { id: uuid(), value: "Pay mortgage", done: false },
    { id: uuid(), value: "Replace laptop’s screen", done: false },
    { id: uuid(), value: "Purchase Milk & Corn Flakes", done: false },
  ]);

  const delCompletedTasks = () => {
    setTasks((prev) => {
      return prev.filter((item) => {
        return item.done !== true;
      });
    });
  };

  return (
    <div className="content">
      <div className="wrapper">
        <h1 className="title">All Tasks</h1>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
        {tasks.length ? (
          <BtnDeleteAll delCompletedTasks={delCompletedTasks} />
        ) : null}
      </div>
    </div>
  );
};

export default Content;
