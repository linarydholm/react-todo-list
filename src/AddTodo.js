const AddTodo = ({addTitle, addDescription, addTodo}) => {

    return ( 
        <div className='add'>
            <h1>Add todo</h1>
            <form onSubmit={addTodo}>
                <input type="text" placeholder="Title" id="titleInput" onChange={addTitle} required />
                <input type="text" placeholder="Description" id="descriptionInput" onChange={addDescription} required />
                <button>Add todo</button>
            </form>
        </div>
     );
}
 
export default AddTodo;