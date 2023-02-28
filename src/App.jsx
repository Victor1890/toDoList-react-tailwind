import { useState } from 'react'
import Heading from './components/Heading'
import ToDoList from './components/ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App font-Poppins container py-16 px-6 min-h-screen mx-auto">
      <Heading/>
      <ToDoList/>
    </div>
  )
}

export default App
