import React, { Component } from 'react';


//通用组件
class Textbox extends Component {

  constructor(props) {
    super(props);
  }
  
  // 渲染页面
  render() {
    return (
      <div>
        <input  type="text" value="文本" />
      </div>
    );
  }
}

export default Textbox;
