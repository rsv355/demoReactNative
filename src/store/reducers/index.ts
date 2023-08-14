import { combineReducers } from 'redux';
import { NestReducer } from './nestReducer'

const rootReducer = combineReducers({
    NestReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>
export { rootReducer }
