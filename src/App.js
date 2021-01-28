import React, { useState,useEffect } from "react";
import './App.css';
//Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //State stuff
  const [inputText, setInputText] = useState("");
  // Making the List for the todo list
  const [todos, setTodos] = useState([]);
  const [status, setStatus] =useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);
  //USE EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //Functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break  
    }
  };
  //Save to Local
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
     let todoLocal = JSON.parse(localStorage.getItem("todos"));
     setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
       <header>
        <h1>Todo List</h1>
       </header>
       <Form
         inputText={inputText}
         todos={todos}
         setTodos={setTodos}
         setInputText={setInputText}
         setStatus={setStatus}
      />
      <TodoList
        setFilteredTodos={filteredTodos}
        setTodos={setTodos} 
        todos={todos}
      />
    </div>
  );
}

export default App;
