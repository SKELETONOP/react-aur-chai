import { useState } from "react";
import "./App.css";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((task, idx) => idx !== index);
    setTasks(filteredTasks);
  };

  

  return (
    <div>
      <h1>My TO-do List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Enter New Task"
      />

      <button onClick={addTask}>Add Task</button>

      {/* Task List */}
      <ul className="no-bullets">
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTaskCompletion(index)}
            style={{ textDecoration: task.completed ? "line-through" : "none", display: "flex", alignItems: "center"}}
          >
            {task.text}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering toggle
                deleteTask(index);
              }}
              style={{margin :"10px"}}
              className="delete"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
