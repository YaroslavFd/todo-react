import { CSSTransition, TransitionGroup } from "react-transition-group";
import TaskItem from "../TaskItem";

import "./styles.css";

const TaskList = ({ tasks, setTasks }) => {
  const deleteTask = (indexToRemove) => {
    setTasks((prev) => {
      return prev.filter((item) => {
        return indexToRemove !== item.id;
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

  const isEmpty = !tasks.length;

  return (
    <ul className="task-list">
      <CSSTransition
        in={isEmpty}
        timeout={700}
        classNames="empty"
        mountOnEnter
        unmountOnExit
      >
        <EmptyList />
      </CSSTransition>

      <TransitionGroup>
        {tasks.map((task, i) => {
          return (
            <CSSTransition key={task.id} timeout={500} classNames="item">
              <TaskItem
                text={task.value}
                task={task}
                updateTaskDone={() => updateTaskDone(i, task.done)}
                deleteTask={() => deleteTask(task.id)}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </ul>
  );
};

const EmptyList = () => {
  return <h2 className="empty-list">Task list is empty</h2>;
};

export default TaskList;
