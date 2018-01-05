//入口页
//基础
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
// 网站路由
import SiteRouter from './router/SiteRouter';
//状态存储
import configureStore from './redux/store/Store';

//载入antd的样式
import 'antd/dist/antd.css'

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
      <SiteRouter />
    </Provider>,
    document.getElementById('root')
);

