import { useDispatch, useSelector } from 'react-redux'
import { setTodoList, addTodo, sortTodo, toggleCompleted, updateTodo } from '../todoSlice'
import { TiPencil } from 'react-icons/ti'
import { BsTrash } from 'react-icons/bs'
import empty from '../assets/empty.jpg'
import { useState } from 'react'

const ToDoList = () => {

    const dispatch = useDispatch();

    const todoList = useSelector((root) => root.todo.todoList)
    const softCriteria = useSelector((root) => root.todo.softCriteria)

    const [showModal, setShowModal] = useState(false)
    const [currentToDo, setCurrentToDo] = useState(null)
    const [newTask, setNewTask] = useState(null)

    return (
        <div>
            {
                showModal && (
                    <div className='fixed w-full left-0 top-0 h-full bg-transparentBlack flex items-center justify-center'>
                        <div className='bg-white p-8 rounded-md '>
                            <input 
                                className='border p-2 rounded-md outline-none mb-8'
                                type='text'
                                value={newTask}
                                placeholder={currentToDo ? "Update your task here" : "Enter your task here"}

                            />
                            <div className='flex justify-between'>{currentToDo ? (
                                <>
                                    <button>Save</button>
                                    <button>Cancel</button>
                                </>
                            ) : (
                                <>
                                    <button className='bg-Tangaroa rounded-md text-white py-3 px-10' onClick={() => setShowModal(false)}>Cancel</button>
                                    <button className='bg-sunsetOrange rounded-md text-white py-3 px-10'>Add</button>
                                </>
                            )}</div>
                        </div>
                    </div>
                )
            }
            <button className="bg-sunsetOrange text-center text-white py-3 px-10 rounded-md" onClick={() => setShowModal(true)}>Add task</button>
        </div>
    )

}

export default ToDoList;