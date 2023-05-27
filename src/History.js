import Tasks from "./components/Tasks";

const History = ({ tasks, setTasks }) => {
  return (
    <>
      {/* display message if task = 0 */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks.filter((task) => task.isCompleted)} />
      ) : (
        "No Tasks To Show"
      )}
    </>
  );
};

export default History;
