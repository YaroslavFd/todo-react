import TaskItem from "../TaskItem";

import "./styles.css";

const TaskList = ({ tasks, setTasks }) => {
  const deleteTask = (indexToRemove) => {
    setTasks((prev) => {
      return prev.filter((item, i) => {
        return indexToRemove !== i;
      });
    });
  };

  const updateTaskDone = (taskIndex, newDone) => {
    setTasks((prev) => {
      const newTasks = [...prev];

      newTasks[taskIndex].done = !newDone;

      return newTasks;
    });
  };

  const empty = tasks.length;

  return (
    <ul className="task-list">
      {empty ? null : <EmptyList />}
      {tasks.map((task, i) => {
        return (
          <TaskItem
            text={task.value}
            task={task}
            key={i}
            updateTaskDone={() => updateTaskDone(i, task.done)}
            deleteTask={() => deleteTask(i)}
          />
        );
      })}
    </ul>
  );
};

const EmptyList = () => {
  return <h2 style={{ fontSize: 24 }}>Task list is empty</h2>;
};

export default TaskList;
