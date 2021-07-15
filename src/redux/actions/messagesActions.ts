import { Message } from '../../types';
import { MESSAGE_RECEIVED } from './constants';

export const messageReceived = (message: Message | null) => ({
    type: MESSAGE_RECEIVED,
    payload: message
});
