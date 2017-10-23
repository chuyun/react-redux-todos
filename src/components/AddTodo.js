/**
 * Created by jun on 2017/10/20.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Input} from 'antd';

class AddTodo extends React.Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {}
    }

    addTodoHanderKeyUp(event) {
        if (event.keyCode === 13 && event.target.value !== "") {
            this.props.addTodo(event.target.value);
            event.target.value = "";
        }
    }

    render() {
        return (
            <div>
                <Input type='text' placeholder='Input someThing'
                       onKeyUp={this.addTodoHanderKeyUp.bind(this)}
                       style={{width: '100%'}}/>
            </div>
        )
    }
}

export default AddTodo;