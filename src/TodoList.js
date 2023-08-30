import Todo from "./Todo";

const TodoList = ({todos, deleteTodo, completeTodo}) => {
    // console.log(todos);

    return (
        todos.map((todo, i) => {
            return (
                <Todo {...todo} deleteTodo={deleteTodo} completeTodo={completeTodo} id={i} />
            )
        })
    )
};
 
export default TodoList;