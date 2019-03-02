import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Home from './Containers/Home/Home';
const screens = {
    HOME: Symbol('screen home'),
};

const styles = theme => ({
    app: {
        background:
            "url('https://uploads.codesandbox.io/uploads/user/546871f9-83c3-446d-83b3-6815f3dbfea5/z2t--IMG_1373.JPG')",
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
});

const App = props => {
    const [selectedScreen, setSelectedScreen] = useState(screens.HOME);

    const { classes } = props;
    return (
        <div id="app" className={classes.app}>
            {selectedScreen === screens.HOME ? <Home /> : null}
        </div>
    );
};

export default withStyles(styles)(App);
