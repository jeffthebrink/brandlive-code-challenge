import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Button,
    Dialog,
    TextField,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@material-ui/core';

import { setUsername } from '../redux/actions/userActions';

const Login = () => {
    const [username, setUsernameField] = useState('');
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch();

    const handleLogin = (e: any) => {
        dispatch(setUsername(username));
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Brandlive Chat</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please login with your name to use the app.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        onChange={e => setUsernameField(e.target.value)}
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleLogin}
                        color="primary"
                        disabled={username === ''}
                    >
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Login;
