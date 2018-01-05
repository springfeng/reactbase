
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