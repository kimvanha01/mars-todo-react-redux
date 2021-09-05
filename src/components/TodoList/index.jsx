import { useSelector } from "react-redux";
import { TodoItem } from "../TodoItem";

import "./TodoList.scss";


export default function TodoList() {
    const todoList = useSelector((state) => state.todoList);
    console.log(todoList)
    return (
        <div className="todoList">
            {todoList.length === 0 ? (
                <h2>Add todo now!!!</h2>
            ) : (
                todoList.map((todoItem) => {
                    return <TodoItem key={todoItem.id} todoItem={todoItem} />;
                })
            )}
        </div>
    );
};
