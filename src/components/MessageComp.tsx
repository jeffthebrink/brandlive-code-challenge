import React from 'react';
import { Avatar, Box, Grid, Paper, Tooltip } from '@material-ui/core';

import { Message } from '../types';

const MessageComp: React.FC<{ message: Message }> = ({ message }) => {
    const usernameToInitial = (username: string) => {
        return username.charAt(0);
    };

    return (
        <Grid item>
            <Grid container spacing={2}>
                <Grid item style={{ marginBottom: '2px', zIndex: 0 }}>
                    <Tooltip title={message.username} aria-label="username">
                        <Avatar>
                            {usernameToInitial(message.username)}
                        </Avatar>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Paper color="primary">
                        <Box p={1}>
                            {message.message}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default MessageComp;
