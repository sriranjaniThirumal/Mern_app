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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWDjt3NqT6mFZGThGLT8a1080VZTgWOIdxBPfMmvB0BW8jOB4jWXdpqxNbAyO71cpd7w&usqp=CAU"
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