import React, { Component } from 'react';

import App from '../components/App';
import Textbox from '../components/Textbox';

//通用组件
class Login extends Component {

  constructor(props) {
    super(props);
  }
  
  // 渲染页面
  render() {
    return (
      <div>
        <Textbox/> 
        <App />
      </div>
    );
  }
}

export default Login;