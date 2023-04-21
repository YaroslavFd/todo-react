import "./styles.css";

const TaskItem = ({ text, task, updateTaskDone, deleteTask }) => {
  return (
    <li className="task-item">
      <label className="item-checkbox">
        <input
          className="checkbox"
          type="checkbox"
          checked={task.done}
          onClick={updateTaskDone}
          readOnly
        />
        <div></div>
      </label>
      <p className={`item-text ${task.done ? "task-done" : ""}`}>{text}</p>
      <button className="task-delete" onClick={deleteTask}>
        <svg
          width="18"
          height="20"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.66667 3.33333L6.25 1H9.75L10.3333 3.33333M15 3.33333H2.16667L3.33333 17.3333H12.6667L13.8333 3.33333H1H15ZM8 6.83333V13.8333V6.83333ZM10.9167 6.83333L10.3333 13.8333L10.9167 6.83333ZM5.08333 6.83333L5.66667 13.8333L5.08333 6.83333Z"
            stroke="#FF0000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
};

export default TaskItem;
