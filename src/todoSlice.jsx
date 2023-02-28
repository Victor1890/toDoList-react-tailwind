import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [],
    softCriteria: "All",
}

const todoSlice = createSlice({
    initialState,
    name: "todo-slice",
    reducers: {   
        setTodoList: (state, action) => {
            state.todoList = action.payload
        },
        addTodo: (state, action) => {
            state.todoList.push({
                task: action.payload.task,
                id: action.payload.id,
                completed: false
            })
        },
        sortTodo: (state, action) => {
            state.softCriteria = action.payload
        },
        updateTodo: (state, action) => {
            const { id, task } = action.payload;
            const index = state.todoList.findIndex((list) => list.id == id);

            state.todoList[index].task = task;
        },
        toggleCompleted: (state, action) => {
            const { id } = action.payload;
            const index = state.todoList.findIndex((list) => list.id == id);

            state.todoList[index].completed = !state.todoList[index].completed;
        }
    }
})

export const { addTodo, setTodoList, sortTodo, toggleCompleted, updateTodo } = todoSlice.actions;

export default todoSlice.reducer