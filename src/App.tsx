import { useState } from "react"
import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm"

// Component
function App() {
  const [todos, setTodos] = useState(dummyData) // initial value
  // useState : react component
  // setTodos: state update function (hooks)



  function setTodoCompleted(id: number, completed: boolean){
    setTodos((prevTodos) => 
    // array element todo
    // "..." means parents todo
    prevTodos.map((todo) => (todo.id === id ? {...todo, completed}: todo)))
 


      // alert(`Todo with id ${id} is now ${completed ? "completed" : "not"}`)
  }

  function addTodo(title: string){
    setTodos(prevTodos => [ // array
      // add new todo above the original todos
      {
        id: prevTodos.length + 1,
        title,
        completed: false
      },
      ...prevTodos // original todos
    ])
  }

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm
        onSubmit={addTodo}
         />
          {/* map: return s.t.  */}
          {/* key: unique id in the type "todo"*/}
        <div className="space-y-2">
          {/* {dummyData.map(todo => (
            <p key={todo.id} className="text-lg">
              {todo.title}
            </p>
          ))} */}
          {todos.map((todo) => (
            <TodoItem 
            key={todo.id}
            todo={todo}
            onCompetedChange={setTodoCompleted}
             />
          ))}

        </div>
      </div>
    </main>
  )
}

export default App
