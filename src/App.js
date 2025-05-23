import { useState } from "react";
import shortid from "shortid";

import CreateTask from "./components/create/CreateTask";
import ShowTask from "./components/show/ShowTask";
import classes from "./App.module.css";
import FilterTask from "./components/filterTask/FilterTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  function addTask(taskName) {
    const newTask = {
      _id: shortid.generate(),
      name: taskName,
      isCompleted: false,
      createdAt: new Date(),
    };

    setTasks([newTask, ...tasks]);
  }

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  }

  function filterTasks() {
    if (filter === "all") {
      return tasks;
    } else if (filter === "completed") {
      return tasks.filter((task) => task.isCompleted);
    } else if (filter === "not-completed") {
      return tasks.filter((task) => !task.isCompleted);
    }
  }

  function handleFilterChange(filterValue) {
    setFilter(filterValue);
  }

  return (
    <div className={classes.container}>
      <CreateTask addTask={addTask} />
      <FilterTask filterTasks={handleFilterChange} />
      {tasks.length > 0 ? (
        <ShowTask
          tasks={filterTasks()}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ) : (
        <h2>No tasks available</h2>
      )}
    </div>
  );
}

export default App;
