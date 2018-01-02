import { combineReducers } from 'redux';
import tmp from '../reducers/tmp';

//合并reducer
const reducer = combineReducers({
    tmp,
});

export default reducer;
