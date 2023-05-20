import { useState, useEffect } from "react"
import { useParams, redirect } from "react-router-dom"


const TaskDetails = () => {
  const [loading, setLoading] = useState(false)
  const [task, setTask] = useState({})
  const [error, setError] = useState(null)


  const params = useParams()
  const id = params.id

  useEffect(() => {
    const getTask = async () => {
      setLoading(true)
      try {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        setTask(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    getTask()
  }, [id])
  
  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>

  return loading ? (
    <h3>Loading...</h3>
  ) : error ? (
    <h3>{error}</h3>
    ) : (
    <div>
      <h2>{task.text}</h2>
      <p>{task.day}</p>
      <p>{task.reminder ? 'Reminder set' : 'Reminder not set'}</p>      
    </div>
  )
}

export default TaskDetails
