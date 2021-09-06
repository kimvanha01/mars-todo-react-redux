import { useSelector } from "react-redux";
import { TodoItem } from "../TodoItem";
import "./TodoList.scss";



export default function TodoList() {
    const todos = useSelector((state) => state.todoList);

    console.log(todos);
    return (
        <div className="todoList">
            {todos.length === 0 ? (
                <h2>Add todo now!!!</h2>
            ) : (
                todos.map((todo) => {
                    return <TodoItem key={todo.id} todoItem={todo} />;
                })
            )}
        </div>
    );
};
