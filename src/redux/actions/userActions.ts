import { CLEAR_USERNAME, SET_USERNAME } from './constants';

export const setUsername = (username: string) => ({
    type: SET_USERNAME,
    payload: {
        username
    }
});

export const clearUsername = () => ({
    type: CLEAR_USERNAME,
    payload: {}
});
