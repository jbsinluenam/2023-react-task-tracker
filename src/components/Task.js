import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdRestore } from "react-icons/md";

function Task({ task, onDelete, onToggle, onToggleComplete }) {
  return (
    <div
      onDoubleClick={() => onToggle(task.id)}
      //if reminder is true then add class reminder
      className={`task ${task.reminder ? "reminder" : ""}`}
    >
      <h3>
        {task.text}
        <div>
          <MdRestore
            style={{
              color: "green",
              cursor: "pointer",
              display: task.isCompleted ? "flex" : "none",
            }}
            onClick={() => onToggleComplete(task.id)}
          />
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            // onClick={() => onDelete(task.id)}
            onClick={() =>
              task.isCompleted ? onDelete(task.id) : onToggleComplete(task.id)
            }
          />
        </div>
      </h3>
      <p>{task.day}</p>
      <p
        className="statusCompleted"
        style={{
          display: task.isCompleted ? "inline-block" : "none",
        }}
      >
        completed
      </p>
      {/* <p>
        <Link to={`/task/${task.id}`}>View Details</Link>
      </p> */}
    </div>
  );
}

export default Task;
