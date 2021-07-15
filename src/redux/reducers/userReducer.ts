import { CLEAR_USERNAME, SET_USERNAME } from '../actions/constants';

const initialState: any = {
    username: localStorage.getItem('username')
}

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USERNAME: {
            const { username } = action.payload;
            localStorage.setItem('username', username);
            return {
                ...state,
                username,
            }
        }
        case CLEAR_USERNAME: {
            localStorage.removeItem('username');
            return {
                ...state,
                username: '',
            }
        }
        default:
            return state;
    }
}

export default userReducer;
