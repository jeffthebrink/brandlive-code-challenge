import { createContext } from 'react'
import { useDispatch } from 'react-redux';

import { Message } from './types';
import { messageReceived } from './redux/actions/messagesActions';

const socket = require('socket.io-client');

const SocketContext = createContext<{ connection: any, sendMessage: Function } | null>(null);
export { SocketContext };

const SocketProvider = ({ children }: any) => {
    const channel = 'code-test';
    const connection = socket.connect('wss://codechallenge.brand.live');

    const dispatch = useDispatch();

    const sendMessage = (text: string, name: string) => {
        const messageObj: Message = {
            message: text,
            username: name,
            timestamp: Date.now()
        }
        connection.emit('message', messageObj, channel);
    };

    connection.on('connect', () => {
        connection.emit('join-channel', channel);
    });

    connection.on('error', (e: any) => {
        console.error(e);
    });

    connection.on('message', (message: Message) => {
        dispatch(messageReceived(message));
    });

    const webSocket = {
        connection: connection,
        sendMessage
    };

    return (
        <SocketContext.Provider value={webSocket}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
