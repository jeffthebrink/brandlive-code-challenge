import React, {
    SyntheticEvent,
    useContext,
    useRef,
    useState,
    useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import {
    Box,
    Button,
    CssBaseline,
    Container,
    Grid,
    Paper,
    TextField,
    InputAdornment,
} from '@material-ui/core';

import { RootState } from '../redux/store';
import { SocketContext } from '../SocketProvider';
import MessageComp from './MessageComp';
import { Message } from '../types';
import Header from './Header';

import './chatWindow.scss';

const ChatWindow = () => {
    const socketContext = useContext(SocketContext);
    const [message, setMessage] = useState<String>('');
    const messages = useSelector((state: RootState) => state.messages.messages);
    const username = useSelector((state: RootState) => state.user.username)
    const chatHistoryRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        chatHistoryRef.current?.scrollIntoView({ behavior: 'smooth' });
    });

    const createMessage = (e: SyntheticEvent) => {
        e.preventDefault();
        socketContext?.sendMessage(message, username);
        setMessage('');
    };

    return (
        <>
            <Header />
            <CssBaseline />
            <Container maxWidth="lg" className="chat-window-container">
                <Grid
                    alignItems="flex-start"
                    container
                    direction="column"
                    justifyContent="space-between"
                >
                </Grid>
                <Grid container
                    alignItems="flex-start"
                    direction="column"
                    justifyContent="flex-start"
                    spacing={1}
                    style={{ flex: 1, flexWrap: 'nowrap', overflowY: 'auto' }}
                >
                </Grid>
                {messages.map((message: Message, index: number) => <MessageComp message={message} key={index} />)}
                <div ref={chatHistoryRef} />
                <Box mt={2} style={{ width: '100%' }}>
                    <Grid container spacing={2}>
                        <Grid item style={{ flexGrow: 1 }}>
                            <Paper style={{ marginBottom: '10px' }}>
                                <Box p={1}>
                                    <form onSubmit={createMessage} className="chat-input-form">
                                        <TextField
                                            label="Message"
                                            fullWidth
                                            rowsMax={4}
                                            value={message}
                                            onChange={e => setMessage(e.target.value)}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">
                                                    <div style={{ marginBottom: '15px' }}>
                                                        <Button
                                                            disabled={!message}
                                                            type="submit"
                                                            color="primary"
                                                            variant="contained"
                                                        >
                                                            Send
                                                        </Button>
                                                    </div>
                                                </InputAdornment>
                                            }}
                                        />
                                    </form>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
};

export default ChatWindow;
