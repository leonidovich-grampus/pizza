import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

type Todo = {
    id: string;
    title: string;
    completed: boolean;
}

type TodosState = {
    list: Todo[];
}

const initialState: TodosState = {
    list: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            });
        },
        toggleComplete(state, action: PayloadAction<string>) {
            const toggledTodo = state.list.find(todo => todo.id === action.payload);
            if (toggledTodo) {
                toggledTodo.completed = !toggledTodo.completed;
            }
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        }
    },
});

export const selectTodosList = (rootState: RootState) => rootState.products.list;

export const { addTodo, toggleComplete, removeTodo } = productsSlice.actions;

export default productsSlice.reducer;