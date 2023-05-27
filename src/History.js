import Tasks from "./components/Tasks";

const History = ({ tasks, onToggleComplete, onDelete }) => {
  const filteredTask = tasks.filter((task) => task.isCompleted);

  return (
    <>
      {/* display message if task = 0 */}
      {filteredTask.length > 0 ? (
        <Tasks
          tasks={filteredTask}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ) : (
        "No Tasks To Show"
      )}
    </>
  );
};

export default History;
