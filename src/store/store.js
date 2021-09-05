import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ADD_TODO, DELETE_TODO, GET_TODOS, SET_FILTER, SET_TODOS, UPDATE_TODO } from "./action";


const addTodo = (todoList, todo) => {
    return [todo, ...todoList];
};

const deleteTodo = (todoList, id) => {
    return todoList.filter((todo) => todo.id !== id);
};

const updateTodo = (todoList, todo) => {
    return todoList.map((temp) => {
        if (temp.id === todo.id) {
            return todo;
        } else {
            return temp;
        }
    });
};

const toggleTodo = (todoList, id) =>
    todoList.map((todo) => ({
        ...todo,
        isCompleted: todo.id === id ? !todo.isCompleted : todo.isCompleted,
    }));

// const setFilter = (todoList, filter) => {
//     const newList = [...todoList];
//     if (filter === EStatus.all) {
//         return newList;
//     } else if (filter === EStatus.active) {
//         return newList.filter((todo) => todo.isCompleted === false);
//     } else {
//         return newList.filter((todo) => todo.isCompleted === true);
//     }
// };

const initState = {
    todoList: [],
    // filter: EStatus.all,
    todoListFilter: [],
    success: "",
    loading: "loadding",
};

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        // case SET_FILTER: {
        //     return {
        //         ...state,
        //         filter: action.payload,
        //         todoList: setFilter(state.todoListFilter, action.payload),
        //     };
        // }
        case SET_TODOS: {
            return {
                ...state,
                todoList: action.payload,
                // todoListFilter: action.payload,
            };
        }
        case GET_TODOS: {
            return {
                ...state,
                todoList: action.payload,
            };
        }

        case ADD_TODO: {
            return {
                ...state,

                todoList: addTodo(state.todoList, action.payload),
                // todoListFilter: addTodo(state.todoList, action.payload),
                success: "success",
                loading: "Add success",
            };
        }
        case UPDATE_TODO: {
            return {
                ...state,
                todoList: updateTodo(state.todoList, action.payload),
                // todoListFilter: updateTodo(state.todoList, action.payload),
                success: "success",
                loading: "Update success",
            };
        }
        case DELETE_TODO: {
            return {
                ...state,
                todoList: deleteTodo(state.todoList, action.payload),
                // todoListFilter: deleteTodo(state.todoList, action.payload),
                success: "success",
                loading: "Delete success",
            };
        }
        // case TOGGLE_TODO: {
        //     return {
        //         ...state,
        //         todoList: toggleTodo(state.todoList, action.payload),
        //         todoListFilter: toggleTodo(state.todoList, action.payload),
        //         success: "success",
        //         loading: "Update success",
        //     };
        // }
        default: {
            return state;
        }
    }
};

const store = createStore(todoReducer, applyMiddleware(thunk));
export default store;
