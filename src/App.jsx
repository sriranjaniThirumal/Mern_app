import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import GridView from "./GridView";  // Fixed import path
import Todo from "./Todo";
import Navbar from "./Navbar";
import Profile from "./Profile"; 
function App() {
  return (
    <BrowserRouter>
   
        <Navbar />
        <Todo/>
        <Routes>
          <Route path="/" element={<Todo />} />
          {/* <Route path="/gridview" element={<GridView />} /> */}
          <Route path="/profile" element={<Profile />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;