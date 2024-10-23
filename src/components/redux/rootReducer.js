import { combineReducers } from '@reduxjs/toolkit';

import contactsReducer from './contactsSlice'; 
import userReducer from './userSlice'; 

const rootReducer = combineReducers({
  contacts: contactsReducer, 
  user: userReducer,
});

export default rootReducer;