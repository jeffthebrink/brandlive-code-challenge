import { Message } from '../../types';
import { MESSAGE_RECEIVED } from '../actions/constants';

const getMessages = (): Array<Message> => {
    return JSON.parse(localStorage.getItem('messages') || '[]');
};

const getValidMessages = () => {
    let messages = getMessages();
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() - 1)
    const expirationTime = currentDate.getTime();

    messages = messages.filter(message => message.timestamp >= expirationTime);
    localStorage.setItem('messages', JSON.stringify(messages));

    return messages;
};


const initialState: any = {
    messages: getValidMessages()
};

const messageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case MESSAGE_RECEIVED: {
            const newMessage: Message = {
                message: action.payload.message,
                username: action.payload.username,
                timestamp: Date.now(),
            };
            const messages = getMessages();

            messages.push(newMessage);
            localStorage.setItem('messages', JSON.stringify(messages));

            return {
                ...state,
                messages,
            }
        }
        default:
            return state;
    }
};

export default messageReducer;
