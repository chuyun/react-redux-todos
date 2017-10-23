/**
 * Created by jun on 2017/10/20.
 */

/**
 * Created by jun on 2017/10/20.
 */

import React from 'react';
import {connect} from 'react-redux'
import TodoView from '../components/TodoView';
import {addTodo, deleteTodo, editTodo,checked} from "../actions/";
import {Message} from 'antd'

class TodoViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleEditTodoItem(index, val) {
        this.props.editTodoItem(index, val);
    }

    render() {
        return (
            <ul style={{margin:'20px 0'}}>
                {(this.props.todoLists !== undefined && this.props.todoLists.length > 0) ?
                    this.props.todoLists.map((item, index) => {
                        return (
                            <TodoView
                                todoItem={item}
                                key={index}
                                index={index}
                                todoLists={this.props.todoLists}
                                onDelete={this.props.deleteTodo}
                                editTodoItem={this.handleEditTodoItem.bind(this)}
                                {...this.props}
                            />
                        )
                    }) :
                    <p style={{lineHeight: 4}}>Todo 列表中空空如也，快来添加吧！</p>
                }
            </ul>
        )
    }
}


const mapStateToProps = (state) => {
    if (state) {
        return {
            isAllChecked: state.isAllChecked,
            todoLists: state.todoLists
        }
    } else {
        return {
            isAllChecked: state.isAllChecked,
            todoLists: undefined
        }
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (index) => {
            dispatch(deleteTodo(index))
        },
        editTodoItem: (index, val) => {
            dispatch(editTodo(index, val))
        },
        checked: (boolean) => {
            dispatch(checked(boolean))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoViewContainer);