import { toast } from "react-toastify";
import * as actionsAPI from "../api/todoApi";
import * as actions from "./action";

export const getTodosThunk = () => async (dispatch) => {
    try {
        const response = await actionsAPI.getTodosAPI();
        dispatch(actions.getTodos(response.data));
    } catch (error) {
        toast.error(error.message, { autoClose: 3000 });
    }
}
export const addTodoThunk = (todo) => async (dispatch) => {
    try {
        await actionsAPI.addTodoAPI(todo);
        dispatch(actions.addTodo(todo));
    } catch (error) {
        toast.error(error.message, { autoClose: 3000 });
    }
}
export const updateTodoThunk = (todo) => async (dispatch) => {
    try {
        await actionsAPI.updateTodoAPI(todo);
        dispatch(actions.updateTodo(todo));
    } catch (error) {
        toast.error(error.message, { autoClose: 3000 });
    }
}
export const deleteTodoThunk = (id) => async (dispatch) => {
    try {
        await actionsAPI.deleteTodoAPI(id);
        dispatch(actions.deleteTodo(id));
    } catch (error) {
        toast.error(error.message, { autoClose: 3000 });
    }
}