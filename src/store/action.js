
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_NEWTODO = "SET_NEWTODO";
export const SET_TODOS = "SET_TODOS";
export const GET_TODOS = "GET_TODOS";
export const SET_FILTER = "SET_FILTER";

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
});
export const updateTodo = (todo) => ({
    type: UPDATE_TODO,
    payload: todo
});
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
});
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id,
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});

export const setTodos = (todos) => ({
    type: SET_TODOS,
    payload: todos,
});
export const getTodos = (data) => (dispatch) => {
    const todos = data;
    let newTodos = [];
    for (let todo of todos) {
        newTodos.unshift(todo);
    }
    dispatch(setTodos(newTodos));
    // dispatch(setFilter(EStatus.all));
};