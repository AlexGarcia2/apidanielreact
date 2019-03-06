import { combineReducers } from 'redux';
import databaseReducer from './database-reducer'


const rootReducer = combineReducers({
  userInputList: databaseReducer
});

export default rootReducer;
