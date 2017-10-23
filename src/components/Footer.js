/**
 * Created by jun on 2017/10/20.
 */
import React from 'react';
import PropTypes from 'prop-types'
import {Checkbox, Button, Popconfirm, Message} from 'antd';

export default class Footer extends React.Component {

    static propTypes = {
        Checked: PropTypes.func.isRequired,
        deleteChecked: PropTypes.func.isRequired,
        checkedFunc: PropTypes.func.isRequired,
        todoLists: PropTypes.any.isRequired,
        isAllChecked: PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            isAllChecked: false,
            report: ''
        }
    }

    componentDidMount() {
        this.setState({
            isAllChecked: this.props.isAllChecked,
        })
    }

    handleCheckBox() {
        this.props.Checked(!this.state.isAllChecked);
        this.setState({
            isAllChecked: !this.state.isAllChecked
        });
    }

    confirm = () => {
        let hasCheckedItem = false;
        this.props.todoLists.map((item) => {
            if (item.completed) {
                hasCheckedItem = true
            }
        });
        if (hasCheckedItem) {
            this.props.deleteChecked();
            this.setState({
                isAllChecked: false
            });
            this.props.checkedFunc(false);
            Message.success('已删除完成部分');
        } else {
            Message.error('暂无选中项目');
        }
    };


    render() {
        console.log(this.props.isAllChecked);
        return (
            <div className='footer'>
                {this.props.todoLists.length ? `已完成: ${this.props.todoLists.filter((item) => item.completed === true).length} / ${this.props.todoLists.length}` : ``}
                <br/>
                <br/>
                <Checkbox
                    style={{marginTop: '1px'}}
                    onChange={this.handleCheckBox.bind(this)}
                    checked={this.state.isAllChecked || (this.props.todoLists.length > 0 && this.props.todoLists.every((item) => item.completed))}
                >
                    {this.state.isAllChecked || (this.props.todoLists.length > 0 && this.props.todoLists.every((item) => item.completed)) ? '全不选' : "全选"}
                </Checkbox>
                <Popconfirm title="Are you sure you want to delete all selected items?" onConfirm={this.confirm}
                            onCancel={this.cancel} okText="Yes" cancelText="No">
                    <Button
                        className='deleteAll'
                        size='small'
                        type="danger"
                    >
                        删除已完成
                    </Button>
                </Popconfirm>
            </div>
        )

    }
}