import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import ReactLogo from './reactjs-ar21.svg';
const AngularLogo = require('./angular.svg').ReactComponent;
const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        display: 'flex',
    },
    card: {
        width: 400,
        textAlign: 'center',
    },
});
console.log(ReactLogo);
const Home = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid
                container
                direction="column"
                justify="flex-end"
                alignItems="center"
            >
                <Grid item xs>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5">Johan lajili </Typography>
                            <Typography variant="subtitle2">
                                Senior JavaScript Contractor
                            </Typography>
                            <Grid
                                xs={12}
                                container
                                direction="row"
                                justfiy="space-around"
                            >
                                <Grid item xs>
                                    <Grid container direction="column">
                                        <Grid item xs>
                                            <Typography variant="h3">
                                                8
                                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            years of experience
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs>
                                    <Grid container direction="column">
                                        <Grid item xs>
                                            <img
                                                src={ReactLogo}
                                                className="tech-logo react"
                                            />
                                        </Grid>
                                        <Grid item xs>
                                            <AngularLogo className="tech-logo angular" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs>
                                    test
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs />
            </Grid>
        </div>
    );
};

export default withStyles(styles)(Home);
