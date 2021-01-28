import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus}) => {
    //Here I can write javascript code and function 
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    //this is for after you hit the plus button the hold page won't refresh 
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random() *1000 }
        ]);
        setInputText("");
    };
    const statusHandler = (task) => {
        setStatus(task.target.value);
    };
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">ALL</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}
    
export default Form;