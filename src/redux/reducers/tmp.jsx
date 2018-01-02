
import {
    CHANGE_TODO_TO_DOING
} from '../actions';

let todos;
(() => {
    if (localStorage.todos) {
        todos = JSON.parse(localStorage.todos);
    } else {
        todos = [];
    }
})();

const tmp = (state = todos, action) => {
    switch (action.type) {
       /*
        *  添加新的事项
        *  并进行本地化存储
        *  使用ES6展开运算符链接新事项和旧事项
        *  JSON.stringify进行对象深拷贝
        */
        case CHANGE_TODO_TO_DOING:
            return [
                ...state, {
                    todo: action.text,
                    istodo: true,
                    doing: false,
                    done: false
                }
            ];
        
        default:
            return state;
    }
}

export default tmp;