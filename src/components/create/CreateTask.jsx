import { useState } from "react";

import classes from "./CreateTask.module.css";

function CreateTask({ addTask }) {
  const [taskName, setTaskName] = useState("");

  return (
    <div className={classes.taskContainer}>
      <h1>Create Task</h1>
      <label htmlFor="taskName">
        Task Name:
        <input
          className={classes.taskName}
          type="text"
          name="taskName"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          if (taskName) addTask(taskName);
          else alert("Please enter a task name");
          setTaskName("");
        }}
      >
        Create Task
      </button>
    </div>
  );
}

export default CreateTask;
