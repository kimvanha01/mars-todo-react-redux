import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Header from './components/Header';
import TabFilter from './components/TabFilter';
import TodoList from './components/TodoList';
import { getTodosThunk } from './store/thunk';

toast.configure();

function App() {
  const loading = useSelector(state => state.loading);
  const success = useSelector(state => state.success);
  const todoList = useSelector(state => state.todoListFilter);

  const dispatch = useDispatch();

  //get Todo
  useEffect(() => {
    dispatch(getTodosThunk());
  }, [dispatch]);

  //Toast noti
  useEffect(() => {
    if (success) {
      toast.success(loading, { autoClose: 2000 });
    }
  }, [loading, success, todoList]);

  return (
    <div className="App">
      <div className="todo">
        <ToastContainer />
        <Header />
        <TabFilter />
        <TodoList />
      </div>
    </div>
  );
}

export default App;

