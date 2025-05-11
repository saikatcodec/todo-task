import ListItem from "./ListItem";
import classes from "./ShowTask.module.css";

function ShowTask({ tasks, toggleTask, deleteTask }) {
  return (
    <div className={classes.container}>
      <h2>Available Tasks</h2>
      <ul>
        {tasks.map((item) => (
          <ListItem
            key={item._id}
            task={item}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShowTask;
