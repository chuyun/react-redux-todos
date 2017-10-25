import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import AddtTodoReducer from './reducer/Todos';
import registerServiceWorker from './registerServiceWorker';

import './index.less';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(AddtTodoReducer, composeEnhancers(
    applyMiddleware(thunk),
    autoRehydrate()
));

/**
 * persistStore 数据持久化到localStorage
 */
persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
