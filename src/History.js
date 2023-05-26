import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";

const History = () => {
  const [tasks, setTasks] = useState([]);

  //fetch data from server
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //fetch single task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const deleteTask = async (id) => {
    // console.log('delete', id)
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert("Error Deleting This Task");
  };

  const toggleComplete = async (id) => {
    console.log("complete", id);

    const taskToToggle = await fetchTask(id);
    const updTask = {
      ...taskToToggle,
      isCompleted: !taskToToggle.isCompleted,
    };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      //convert object to json
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: data.isCompleted } : task
      )
    );
  };

  return (
    <>
      {/* display message if task = 0 */}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks.filter((task) => task.isCompleted)}
          onDelete={deleteTask}
          onToggleComplete={toggleComplete}
        />
      ) : (
        "No Tasks To Show"
      )}
    </>
  );
};

export default History;
