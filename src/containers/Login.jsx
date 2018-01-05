import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from '../components/App';
import Textbox from '../components/Textbox';

import {
  changeTodoToDoing,
} from '../redux/actions';


//通用组件
class Login extends Component {

  constructor(props) {
    super(props);
    
  }
  
  // 渲染页面
  render() {
    const { dispatch, todolist } = this.props;
    return (
      <div>
        <Textbox  /> 
        <App ClickEvent={e=>dispatch(changeTodoToDoing(e))} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todolist: state.todolist };
};

export default connect(mapStateToProps)(Login);
// export default Login;