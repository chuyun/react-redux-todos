//action creators
import * as ActionTypes from '../constants/ActionTypes';

export const initTodoLists = (todoLists) => {
    return {type: ActionTypes.INIT_TODOS, todoLists}
};


export const addTodo = (todo) => {
    return {type: ActionTypes.ADD_TODO, todo}
};

export const editTodo = (index, val) => {
    return {type: ActionTypes.EDIT_TODO, index, val}
};

export const deleteTodo = (todoIndex) => {
    return {type: ActionTypes.DELETE_TODO, todoIndex}
};

export const checked = (boolean) => {
    return {type: ActionTypes.CHECKED_ALL, boolean}
};

export const deleteChecked = () => {
    return {type: ActionTypes.DELETE_CHECKED}
};
