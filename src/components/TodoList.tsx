import React from "react";
import { TodoListitems } from "./Todolistitem";

interface TodoListProps{
    todos: Array<Todo>;
    toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> =({todos, toggleComplete})=>{
    return(
        <ul>
            {todos.map(todo =>(
                <TodoListitems
                key={todo.text}
                todo={todo}
                toggleComplete={toggleComplete} />
            ))
        }
        </ul>
    );
};