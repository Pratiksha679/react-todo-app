import React, { useState } from 'react'
import TodoList from './TodoList'
import swal from 'sweetalert'

function CreateTodo() {
    const [todo, setTodo] = useState({
        title: '',
        completed: false
    });

    const [todos, setTodos] = useState([]);

    let todosLocalStorage = localStorage.hasOwnProperty('todos') ? JSON.parse(localStorage.getItem("todos")) : [];

    const onChange = (event) => {
        let { value } = event.target;
        let obj = {};
        obj.title = value;
        obj.completed = false;
        setTodo(obj);
    }

    const createTodo = (event) => {
        let { name } = event.target;
        if (event.key === 'Enter' || name === 'todo-button') {
            if (todo.title !== '') {
                todosLocalStorage.unshift(todo);
                localStorage.setItem('todos', JSON.stringify(todosLocalStorage));
                setTodo({ title: "", completed: false });
            }
            else {
                swal("Error", "Please enter a todo to proceed", "error");
            }
        }
    }

    const completeTodo = (i) => {
        if (todosLocalStorage[i]['completed'] !== true) {
            todosLocalStorage[i]['completed'] = true;
            localStorage.setItem('todos', JSON.stringify(todosLocalStorage));
            setTodos(todosLocalStorage);
            swal("Bravo!", "This Todo is completed", "success");
        }
        else {
            swal("Error", "Todo is already marked as completed", "error");
        }
    }

    const deleteTodo = (index) => {
        todosLocalStorage.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todosLocalStorage));
        setTodos(todosLocalStorage);
        swal("Success", "Todo deleted successfully", "success")
    }

    return (
        <>
            <div className='todo-main-container'>
                <div className='text-center'>
                    <h1>React Todo App</h1>
                    <h4>Add a new todo</h4>
                </div>
                <div className='todo-input-container'>
                    <input className="todo-input-text" type='text' placeholder='Enter a new todo ...' value={todo.title} onKeyDown={createTodo} onChange={onChange} />
                    <button className='add-todo-button' type="button" name='todo-button' onClick={createTodo}>Add Todo</button>
                </div>
            </div>
            <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        </>
    )
}

export default CreateTodo
