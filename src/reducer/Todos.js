/**
 * Created by jun on 2017/10/20.
 */
import * as ActionTypes from '../constants/ActionTypes';

export default function (state, action) {
    if (!state) {
        state = {
            isAllChecked: false,
            todoLists: []
        }
    }
    switch (action.type) {
        case ActionTypes.INIT_TODOS:
            return {
                isAllChecked: state.isAllChecked,
                todoLists: action.todoLists
            };
        case ActionTypes.ADD_TODO:
            return {
                isAllChecked: !state.isAllChecked,
                todoLists: [
                    ...state.todoLists,
                    action.todo
                ]
            };
        case ActionTypes.EDIT_TODO:
            return {
                isAllChecked: state.isAllChecked,
                todoLists: [
                    ...state.todoLists.slice(0, action.index),
                    action.val,
                    ...state.todoLists.slice(action.index + 1)
                ]
            };
        case ActionTypes.DELETE_TODO:
            return {
                isAllChecked: state.isAllChecked,
                todoLists: [
                    ...state.todoLists.slice(0, action.todoIndex),
                    ...state.todoLists.slice(action.todoIndex + 1)
                ]
            };
        case ActionTypes.CHECKED_ALL:
            return {
                isAllChecked: action.boolean,
                todoLists: state.todoLists.map((item) => {
                        return {
                            task: item.task,
                            completed: action.boolean,
                            time: item.time
                        }
                    }
                )
            };
        case ActionTypes.DELETE_CHECKED:
            return {
                isAllChecked: state.isAllChecked,
                todoLists: state.todoLists.filter((item) =>!item.completed)
            };
        default:
            return state
    }
}
