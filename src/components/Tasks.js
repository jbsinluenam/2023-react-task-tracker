import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle, onToggleComplete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onDbClick={onToggle}
          onToggle={onToggle}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </>
  );
};

export default Tasks;
