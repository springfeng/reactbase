
//基础
import React, { Component } from 'react';

// 载入容器
import Index from '../containers/Index';
import Login from '../containers/Login';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

// 路由
class SiteRouter extends Component{
    render(){
      return (
          <Router>
            <div>
              <Route exact path="/" component={Login}/>
              
              {/*在此添加路由数据*/}
              <Route exact path="/Index" component={Index}/>
            </div>
        </Router>
      );
    }
}


export default SiteRouter;