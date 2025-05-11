function FilterTask({ filterTasks }) {
  return (
    <div>
      <label htmlFor="filter">Filter by:</label>
      <select id="filter" onChange={(e) => filterTasks(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
      </select>
    </div>
  );
}

export default FilterTask;
