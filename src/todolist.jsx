// import React, { useState } from "react";

// function TodoApp() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState("");
//   const [editIndex, setEditIndex] = useState(null);

//   const addOrUpdateTask = () => {
//     if (input.trim() === "") return;

//     if (editIndex !== null) {
//       // Update task
//       const updatedTasks = [...tasks];
//       updatedTasks[editIndex] = input;
//       setTasks(updatedTasks);
//       setEditIndex(null);
//     } else {
//       // Add new task
//       setTasks([...tasks, input]);
//     }

//     setInput("");
//   };

//   const deleteTask = (index) => {
//     const newTasks = tasks.filter((_, i) => i !== index);
//     setTasks(newTasks);
//   };

//   const editTask = (index) => {
//     setInput(tasks[index]);
//     setEditIndex(index);
//   };

//   const makeUpperCase = () => {
//     const upperTasks = tasks.map((task) => task.toUpperCase());
//     setTasks(upperTasks);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h2>Todo List</h2>

//       <input
//         type="text"
//         value={input}
//         placeholder="Enter task"
//         onChange={(e) => setInput(e.target.value)}
//       />

//       <button onClick={addOrUpdateTask}>
//         {editIndex !== null ? "Update Task" : "Add Task"}
//       </button>

//       <button onClick={makeUpperCase} style={{ marginLeft: "10px" }}>
//         Uppercase All
//       </button>

//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {tasks.map((task, index) => (
//           <li key={index} style={{ margin: "10px" }}>
//             {task}

//             <button
//               onClick={() => editTask(index)}
//               style={{ marginLeft: "10px" }}
//             >
//               Edit
//             </button>

//             <button
//               onClick={() => deleteTask(index)}
//               style={{ marginLeft: "5px" }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoApp;

import "./App.css";
import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateTask = () => {
    if (input.trim() === "") return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = input;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, input]);
    }

    setInput("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setInput(tasks[index]);
    setEditIndex(index);
  };

  const completeTask = (index) => {
    const task = tasks[index];

    setCompletedTasks([...completedTasks, task]);

    const remainingTasks = tasks.filter((_, i) => i !== index);
    setTasks(remainingTasks);
  };

  const makeUpperCase = () => {
    const upperTasks = tasks.map((task) => task.toUpperCase());
    setTasks(upperTasks);
  };

  return (
    <div  classname= "todo-list" style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        value={input}
        placeholder="Enter task"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addOrUpdateTask}>
        {editIndex !== null ? "Update Task" : "Add Task"}
      </button>

      <button onClick={makeUpperCase} style={{ marginLeft: "10px" }}>
        Uppercase All
      </button>

      <h3>Active Tasks</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: "10px" }}>
            {task}

            <button onClick={() => editTask(index)} style={{ marginLeft: "10px" }}>
              Edit
            </button>

            <button onClick={() => deleteTask(index)} style={{ marginLeft: "5px" }}>
              Delete
            </button>

            <button onClick={() => completeTask(index)} style={{ marginLeft: "5px" }}>
              Complete
            </button>
          </li>
        ))}
      </ul>

      <h3>Completed Tasks</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {completedTasks.map((task, index) => (
          <li key={index} style={{ margin: "10px", color: "green" }}>
            ✔ {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;