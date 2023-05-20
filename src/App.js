import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import TaskDetails from "./components/TaskDetails";


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  //fetch data from server
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
  const res = await fetch("http://localhost:5000/tasks")
  const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
    return data
  }

  //set reminder
  const toggleReminder = (id) => {
    const toggleTask = async () => {
      const taskToToggle = await fetchTask(id)
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        //convert object to json
        body: JSON.stringify(updTask)
      })

      const data = await res.json()
      console.log(data)

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    }

    toggleTask()
  }

    const addTask = async (task) => {
      // console.log(task)
      // const id = Math.floor(Math.random() * 10000) + 1
      // console.log(id)
      // const newTask = { id, ...task }
      // console.log(newTask)

      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        //convert object to json
        body: JSON.stringify(task)
      })
      
      const data = await res.json()
      
      setTasks(tasks.map((task) => task.id === data.id ? { ...task, reminder: !task.reminder } : task))
  }

  const deleteTask = async (id) => {
    // console.log('delete', id)
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }


  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
  
      
        <Routes>
          <Route path="/" element={            <>
              {showAddTask &&
                <AddTask
                onAdd={addTask}
                />}
              {/* display message if task = 0 */}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  
                onToggle={toggleReminder} /> : 'No Tasks To Show'}
            </> }
          />
          <Route path="/about" element={<About />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
