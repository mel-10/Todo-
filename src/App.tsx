import React, { useState } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import {TodoList} from './components/TodoList';

function App() {
  const [todos, setTodos] =useState<Array<Todo>>([]);

  const addTodo: AddTodo = newTodo =>{
    if(newTodo !== ""){
      setTodos([...todos, {text: newTodo , complete:false}]);
    }
  };

  const toggleComplete: ToggleComplete =selectedtodo =>{
    const updatedTodos = todos.map(todo=>{
      if(todo===selectedtodo){
        return{...todo, complete: !todo.complete};
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete}/>     
    </div>
  );
}

export default App;
