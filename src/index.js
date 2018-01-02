import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux';
import App from './container/App';
import AllMemosRoute from './router/AllMemosRoute';
import TodoRoute from './router/TodoRoute';
import DoingRoute from './router/DoingRoute';
import DoneRoute from './router/DoneRoute';
import configureStore from './store';
// import './main.less';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route
                path="/"
                component={App}
            >
                <IndexRoute component={AllMemosRoute} />
                <Route path="/todo" component={TodoRoute} />
                <Route path="/doing" component={DoingRoute} />
                <Route path="/done" component={DoneRoute} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

