import { useState, useEffect } from 'react'
import TodoInput from './Components/TodoInput'
import TodoItem from './Components/TodoItem'
import { TodoProvider } from './Context/Context'
import ThemeBtn from './Components/ThemeBtn'

function App() {

  const lightTheme = () => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add('light');
  }
  const darkTheme = () => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add('dark');
  }

  useEffect(() => {
    darkTheme()
  }, [])

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevArr) => [...prevArr, { id: Date.now(), ...todo }])
  }

  const updateTodo = (todo, id) => {
    setTodos((prevArr) => prevArr.map((prevArrTodo) => prevArrTodo.id === id ? todo : prevArrTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prevArr) => prevArr.filter((prevArrTodo) => prevArrTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prevArr) => prevArr.map((prevArrTodo) => prevArrTodo.id === id ? { ...prevArrTodo, completed: !prevArrTodo.completed } : prevArrTodo))
  }

  useEffect((todo) => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, darkTheme, lightTheme, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-slate-100 min-h-screen py-4 dark:bg-gray-800">
        <ThemeBtn />
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-slate-300 dark:bg-transparent">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 text-black dark:text-white">Write Your Tasks Here</h1>
          <div className="mb-4 ">
            <TodoInput />
          </div>
          <div className="flex flex-wrap gap-y-3 pb-10">
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
