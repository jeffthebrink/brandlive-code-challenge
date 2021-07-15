import React from 'react';
import { useDispatch } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
} from '@material-ui/core';

import { clearUsername } from '../redux/actions/userActions';
import brandliveLogo from '../assets/brandlive-logo.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(clearUsername());
    };

    return (
        <div className={classes.root} style={{ position: 'fixed', width: '100%', zIndex: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <img src={brandliveLogo} alt="logo" height="40px" width="200px" />
                    <Typography variant="h6" className={classes.title}>
                        Chat
                    </Typography>
                    <Button
                        onClick={handleLogout}
                        color="inherit"
                        className="logout-button"
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;