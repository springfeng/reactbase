/*
 */

export const CHANGE_TODO_TO_DOING = 'Change_Todo_To_Doing';



/*
 * @method  changeTodoToDoing 状态由todo转为doing
 * @param  {Number} index 需要改变状态的事项的下标
 */
export function changeTodoToDoing(index) {
    return {
        type: CHANGE_TODO_TO_DOING,
        index,
    };
}
