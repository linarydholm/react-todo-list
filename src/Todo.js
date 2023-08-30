const Todo = ({title, description, isDone, deleteTodo, completeTodo, id}) => {

    return (
        isDone ?
        <div className='done'>
            <h2>{title}</h2>
            <button className='delete-btn'onClick={() => deleteTodo(id)} >Delete "{title}" from todo list</button>
        </div>
        :
        <div className='todo'>
            <h2>{title}</h2>
            <p>{description}</p>
            <button className='delete-btn' onClick={() => deleteTodo(id)}>Delete "{title}" from todo list</button>
            <button className='done-btn' onClick={() => completeTodo(id)}>Mark as done</button>
        </div>
    );
}
 
export default Todo;