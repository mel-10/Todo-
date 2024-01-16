interface TodoListitemsProps{
    todo: Todo;
    toggleComplete: ToggleComplete;
}

export const TodoListitems: React.FC<TodoListitemsProps> =({todo, toggleComplete}) =>{
    return (
        <li>
            <label className={todo.complete ? "todo-row completed" : "todo-row"}>
                <input type="checkbox" onChange={ ()=> toggleComplete(todo)} checked={todo.complete} />
                {todo.text}
            </label>
        </li>
    )
}