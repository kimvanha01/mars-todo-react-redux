
import "./TabFilter.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/action";
export default function TabFilter() {
    const dispatch = useDispatch();

    const filter = useSelector((state) => state.filter);

    const todoList = useSelector((state) => state.todoListFilter);
    return (
        <div className="filter">
            <button
                className={classNames(" btn-filter", {
                    btn__active: filter === "all",
                })}
                onClick={() => dispatch(setFilter("all"))}
            >
                All ({todoList.length})
            </button>
            <button
                className={classNames(" btn-filter", {
                    btn__active: filter === "active",
                })}
                onClick={() => dispatch(setFilter("active"))}
            >
                Active ({todoList.filter((todo) => todo.isCompleted === false).length})
            </button>
            <button
                className={classNames(" btn-filter", {
                    btn__active: filter === "complete",
                })}
                onClick={() => dispatch(setFilter("complete"))}
            >
                Completed ({todoList.filter((todo) => todo.isCompleted === true).length}
                )
            </button>
        </div>
    );
};
