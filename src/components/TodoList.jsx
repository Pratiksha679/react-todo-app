import React from 'react'

function TodoList(props) {
    const todos = props.todos.length > 0 ? props.todos : JSON.parse(localStorage.getItem('todos'));
    const completeTodo = props.completeTodo;
    const deleteTodo = props.deleteTodo;

    return (
        <div className='todo-list-container'>
            <ul>
                {todos && todos.length > 0 ?
                    todos.map((todo, index) => {
                        return <div className='list-container' key={index}>
                            <li className={todo['completed'] ? 'line-through' : null}>{todo.title}</li>
                            <div className='icons-container'>
                                <i title='Mark as Complete' onClick={() => {
                                    completeTodo(index);
                                }} className={`fa-solid fa-circle-check icon-pointer ${todo['completed'] ? 'green' : 'blue'}`}></i>
                                <i title='Delete Todo' className="fa-solid fa-trash icon-pointer" onClick={() => {
                                    deleteTodo(index)
                                }}></i>
                            </div>
                        </div>
                    }) : null
                }
            </ul >
        </div >
    )
}

export default TodoList
