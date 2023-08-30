import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Complete homework",
      description: "Finish math and history assignments",
      isDone: false
    },
    {
      title: "Go for a run",
      description: "Run for 30 minutes in the park",
      isDone: false
    },
    {
      title: "Buy groceries",
      description: "Get milk, eggs, bread, and vegetables",
      isDone: true
    },
    {
      title: "Call mom",
      description: "Discuss plans for the weekend",
      isDone: false
    },
    {
      title: "Read a book",
      description: "Read the first three chapters of 'The Great Gatsby'",
      isDone: true
    },
    {
      title: "Write in journal",
      description: "Reflect on the day and jot down thoughts",
      isDone: false
    },
    {
      title: "Pay bills",
      description: "Pay electricity, water, and internet bills",
      isDone: false
    },
    {
      title: "Organize closet",
      description: "Sort out clothes and donate unused items",
      isDone: true
    },
    {
      title: "Study coding",
      description: "Work on coding exercises for an hour",
      isDone: false
    },
    {
      title: "Watch movie",
      description: "Watch the latest superhero movie",
      isDone: true
    }
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTitle = (e) => {
    setTitle(e.target.value);
  };

  const addDescription = (e) => {
    setDescription(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      description,
      isDone: false
    }

    // Uppdatera todos
    setTodos((prevState) => [...prevState, newTodo]);

    // Töm title och description
    setTitle("");
    setDescription("");

    // Töm också input fields
    document.querySelector('#titleInput').value = "";
    document.querySelector('#descriptionInput').value = "";
  };

  const deleteTodo = (id) => {
    // console.log('deleted', id);
    let newTodos = todos.filter((todo, i) => i !== id);
    setTodos(newTodos);
  }

  const completeTodo = (i) => {
    let newTodos = [...todos];
    newTodos[i].isDone = true;
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <AddTodo addTitle={addTitle} addDescription={addDescription} addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    </div>
  )
};

export default App;
