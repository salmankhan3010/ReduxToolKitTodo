import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {

  return (
    <>
    <h1 className=' bg-slate-900 text-white text-3xl'>React Redux Todo App</h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
