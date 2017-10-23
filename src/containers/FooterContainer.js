/**
 * Created by jun on 2017/10/21.
 */

import React from 'react';
import {connect} from 'react-redux'
import Footer from '../components/Footer';
import {checked, deleteChecked} from "../actions/";

class FooterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Footer Checked={this.props.handleChecked} {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAllChecked: state.isAllChecked,
        todoLists: state.todoLists
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChecked: (todos) => {
            dispatch(checked(todos))
        },
        deleteChecked: () => {
            dispatch(deleteChecked());
        },
        checkedFunc: (boolean) => {
            dispatch(checked(boolean))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterContainer);