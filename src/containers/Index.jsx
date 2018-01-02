import React, { Component } from 'react';

import App from '../components/App';

//通用组件
class Index extends Component {

  constructor(props) {
    super(props);
  }
  
  // 渲染页面
  render() {
    return (
      <div>
        <App />
        <App />
        <App />
        <App />
      </div>
    );
  }
}

export default Index;