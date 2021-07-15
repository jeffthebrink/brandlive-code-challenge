import { combineReducers } from 'redux';

import messages from './messagesReducer';
import user from './userReducer';

export default combineReducers({ messages, user });
