import React, { Component } from 'react';

import Button from 'antd/lib/button';

//通用组件
class App extends Component {

  constructor(props) {
    super(props);
    this.handleDel = this.handleDel.bind(this);
  }

  /*
     * @method  handleDel 删除事项
     */
    handleDel(e) {
      const delindex = e.target.getAttribute('data-key');
      console.log(this.props);
      this.props.ClickEvent();
  }
  // 渲染页面
  render() {
    return (
      <div className="App">
        <Button type="primary" onClick={this.handleDel}>Button</Button>
      </div>
    );
  }
}

export default App;
