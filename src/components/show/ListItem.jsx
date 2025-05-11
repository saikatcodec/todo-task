import { intlFormatDistance } from "date-fns";

import classes from "./ListItem.module.css";

function ListItem({ task, toggleTask, deleteTask }) {
  return (
    <div className={classes.card}>
      <div className={classes.check}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          style={{ transform: "scale(2)" }}
          onChange={() => toggleTask(task._id)}
        />
      </div>
      <div>
        <h3>{task.name}</h3>
        <p>{intlFormatDistance(task.createdAt, new Date())}</p>
      </div>
      <div className={classes.cardButton}>
        <button
          className={classes.deleteBtn}
          onClick={() => deleteTask(task._id)}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default ListItem;
