/**
 * Created by jun on 2017/10/20.
 */

import React from 'react';
import {connect} from 'react-redux'
import AddTodo from '../components/AddTodo';
import {addTodo} from "../actions/";
import {Message} from 'antd'

class AddTodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleAddTodo(newTodo) {
        if (this.props.addTodo) {
            this.props.addTodo({
                task: newTodo,
                time: +new Date(),
                completed: false
            });
            Message.success('添加成功');
        }
    }

    render() {
        return (
            <AddTodo addTodo={this.handleAddTodo.bind(this)}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {
            dispatch(addTodo(todo))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoContainer);