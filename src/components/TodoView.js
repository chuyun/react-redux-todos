/**
 * Created by jun on 2017/10/20.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Input, Button, Checkbox, Popconfirm, Message} from 'antd'

class TodoView extends React.Component {
    static propTypes = {
        todoItem: PropTypes.any,
        deleteTodoItem: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
        editTodoItem: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
    }

    onRename() {
        this.setState({
            isEditing: true,
        })
    }

    confirm = (idx) => {
        this.props.onDelete(idx);
        Message.success('已删除');
    };

    cancel = (e) => {
        Message.error('已取消');
    };

    handerMouseOver() {
        this.setState({deleteBtnShow: true});
    }

    handerMouseOut() {
        this.setState({deleteBtnShow: false});
    }

    handerInputBulr(index, event) {
        let newTodoItem = this.props.todoItem;
        newTodoItem.task = event.target.value;
        this.props.editTodoItem(index, newTodoItem);
        this.setState({
            isEditing: false,
        })
    }

    handleKeyUp(index, event) {
        let newTodoItem = this.props.todoItem;
        if (event.keyCode === 13 && event.target.value !== "") {
            newTodoItem.task = event.target.value;
            this.props.editTodoItem(index, newTodoItem);
            this.setState({
                isEditing: false,
            })
        }
    }

    onToggleCompleted(index) {
        let newTodoItem = this.props.todoItem;
        newTodoItem.completed = !newTodoItem.completed;
        this.props.editTodoItem(index, newTodoItem);
    }

    render() {
        let deleteStyle = (this.state.deleteBtnShow && !this.state.isEditing) ? {visibility: 'visible'} : {visibility: 'hidden'};
        let checkBoxStyle = this.state.isEditing ? {visibility: 'hidden'} : {visibility: "visible"};
        let labelStyle = this.props.todoItem.completed ? {
            color: '#ccc',
            textDecoration: 'line-through',
            lineHeight: '32px',
            width: '100%'
        } : {lineHeight: '32px', width: '100%'};
        return (
            <li
                onDoubleClick={this.onRename.bind(this)}
                onMouseOver={this.handerMouseOver.bind(this)}
                onMouseOut={this.handerMouseOut.bind(this)}
            >
                <Checkbox style={checkBoxStyle}
                          type="checkbox"
                          checked={this.props.todoItem.completed}
                          onChange={this.onToggleCompleted.bind(this, this.props.index)}
                />
                {
                    this.state.isEditing ?
                        <Input type="text"
                               className="input"
                               style={{display: 'inline', width: '100%'}}
                               ref={`input-`}
                               defaultValue={this.props.todoItem.task}
                               onBlur={this.handerInputBulr.bind(this, this.props.index)}
                               onKeyUp={this.handleKeyUp.bind(this, this.props.index)}
                        />
                        :
                        <span style={labelStyle}>{this.props.todoItem.task}</span>
                }
                <Popconfirm title="Are you sure delete this task?" onConfirm={() => this.confirm(this.props.index)}
                            onCancel={this.cancel} okText="Yes"
                            cancelText="No"
                >
                    <a className="delete-btn" style={deleteStyle}>&times;</a>
                </Popconfirm>
            </li>
        )
    }
}

export default TodoView;