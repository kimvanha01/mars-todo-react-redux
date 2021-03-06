import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoThunk, updateTodoThunk } from "../../store/thunk";
import "./TodoForm.scss";


const TodoForm = ({ setIsModalOpen, title, todoItem }) => {
    const todoList = useSelector((state) => state.todoList);
    const [value, setValue] = useState("");
    const [deadline, setDeadline] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (todoItem !== undefined) {
            setValue(todoItem.title);
            setDeadline(todoItem.deadline);
        }
    }, [todoItem]);

    const handleChangeDeadline = (value) => {
        console.log(typeof value);
        setDeadline(value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleClickSave();
    };

    const handleClickSave = () => {
        if (todoItem !== undefined) {
            dispatch(
                updateTodoThunk({
                    title: value,
                    deadline: deadline,
                    id: todoItem.id,
                    isCompleted: false,
                })
            );
        } else {
            dispatch(
                addTodoThunk({
                    title: value,
                    deadline: deadline,
                    id: todoList.length === 0 ? 1 : todoList[0].id + 1,
                    isCompleted: false,
                })
            );
        }

        setDeadline("");
        setValue("");
        setIsModalOpen(false);
    };

    const handleCancle = () => {
        if (todoItem === undefined) {
            setDeadline("");
            setValue("");
        } else {
            setValue(todoItem.title);
            setDeadline(todoItem.deadline);
        }
        setIsModalOpen(false);
    };
    return (
        <div className="todo-form">
            <div className="todo-form__header">
                <h2>{title}</h2>
            </div>
            <form className="form__input" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Todo Name ..."
                    className="todo-name"
                    value={value}
                    required
                    onChange={(e) => setValue(e.target.value)}
                />
                <p>Deadline</p>
                <input
                    type="datetime-local"
                    className="todo-deadline"
                    value={deadline}
                    onChange={(e) => handleChangeDeadline(e.target.value)}
                />
                <div className="form__control">
                    <input
                        type="button"
                        className="btn btn-cancel"
                        value="Cancel"
                        onClick={handleCancle}
                    />

                    <input type="submit" className="btn btn-primary" value="Save" />
                </div>
            </form>
        </div>
    );
};

export default TodoForm;
