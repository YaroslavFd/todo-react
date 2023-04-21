import "./styles.css";
const BtnDeleteAll = ({ delCompletedTasks }) => {
  return (
    <div className="btn-wrapper">
      <h3 className="btn-title">Delete all completed tasks</h3>
      <button className="delete-all" onClick={delCompletedTasks}>
        Delete
      </button>
    </div>
  );
};

export default BtnDeleteAll;
