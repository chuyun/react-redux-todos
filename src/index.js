import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import AddtTodoReducer from './reducer/Todos';

import {persistStore, autoRehydrate} from 'redux-persist'
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(AddtTodoReducer, composeEnhancers(
    applyMiddleware(thunk),
    autoRehydrate()
));

persistStore(store)


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
