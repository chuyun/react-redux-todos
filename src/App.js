import React, {Component} from 'react';
import './App.css';
import AddTodoContainer from './containers/AddTodoContainer';
import FooterContainer from './containers/FooterContainer';
import TodoViewContainer from './containers/TodoViewContainer';
import {Card, Notification} from 'antd'

const openNotification = (type) => {
    Notification[type]({
        message: 'A Sample Todos use React & Redux',
        description: 'This is the Sample Demo of the React,Redux,Ant-Design,redux-persist etc.And so,you can Add Todo and double-click a todo item to edit. Thanks',
    });
};

class App extends Component {
    render() {
        return (
            <div style={{width: '400px', margin: '0 auto', textAlign: 'center'}}>
                <Card title="Todos-Redux" bordered={false} style={{width: 400}}
                      extra={<a onClick={() => openNotification('info')}>More</a>}>
                    <AddTodoContainer/>
                    <TodoViewContainer/>
                    <FooterContainer/>
                </Card>
            </div>
        );
    }
}

export default App;
