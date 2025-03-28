import React, { useState } from "react";

const Todo = () => {
    const [todo, setTodo] = useState([]); // State to store the list of tasks
    const [newTask, setNewTask] = useState(""); // State to store the new task input

    // Function to add a new task
    const addTask = () => {
        if (newTask.trim() !== "") {
            setTodo([...todo, { task: newTask }]); // Add the new task to the list
            setNewTask(""); // Clear the input field
        }
    };

    // Function to delete a task
    const deleteTask = (indexToDelete) => {
        setTodo(todo.filter((_, index) => index !== indexToDelete)); // Remove the task at the specified index
    };

    return (
        <div style={{ 
            background: "", 
            height: "100vh", 
            width: "100vw", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center" 
        }}>
            <div style={{ 
                backgroundColor: "white", 
                padding: "20px", 
                borderRadius: "10px", 
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
                textAlign: "center", 
                width: "400px" 
            }}>
                <img 
                    src="data:image/jpeg;base64,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"
                    alt="Todo App" 
                    style={{ width: "75px", height: "75px", marginBottom: "20px" }}
                />
                <h2>Sample Page</h2>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter your task" 
                        onChange={(e) => setNewTask(e.target.value)} 
                        value={newTask}
                        style={{ 
                            backgroundColor: "lightgray", 
                            padding: "10px", 
                            borderRadius: "5px", 
                            width: "80%", 
                            marginBottom: "10px" 
                        }}
                    />
                    <button 
                        onClick={addTask} 
                        disabled={!newTask.trim()}
                        style={{ 
                            backgroundColor: "lightblue", 
                            padding: "10px 20px", 
                            border: "none", 
                            borderRadius: "5px", 
                            cursor: "pointer", 
                            marginLeft: "10px" 
                        }}
                    >
                        Add
                    </button>
                </div>
                <ul style={{ listStyleType: "none", padding: "0", marginTop: "20px" }}>
                    {todo.map((item, index) => (
                        <li 
                            key={index} 
                            style={{ 
                                display: "flex", 
                                justifyContent: "space-between", 
                                alignItems: "center", 
                                marginBottom: "10px", 
                                padding: "10px", 
                                backgroundColor: "whitesmoke", 
                                borderRadius: "5px", 
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" 
                            }}
                        >
                            <span>{item.task}</span>
                            <button 
                                onClick={() => deleteTask(index)} 
                                style={{ 
                                    backgroundColor: "red", 
                                    color: "white", 
                                    border: "none", 
                                    padding: "5px 10px", 
                                    borderRadius: "5px", 
                                    cursor: "pointer" 
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo;