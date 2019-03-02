import React from 'react';
import { Grid, Card, CardContent, CardActions, Typography, Avatar, Button } from '@material-ui/core';
import {makeStyles } from '@material-ui/styles';
import ReactLogo from './reactjs-ar21.svg';
import AngularLogo from './angular.svg';
import LondonLogo from './london.png';
import Johan from './johan.png';


const AVATAR_SIZE = 80;
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        display: 'flex',
        paddingTop: 50,
    },
    panelCard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    panelWelcome: {
        marginTop: 50,
    },
    panelButton: {
        marginTop: 50,
    },
    card: {
        position: 'relative',
        width: 400,
        textAlign: 'center',
        overflow: 'visible'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column'
    },
    hero: {
        height: 100,
    },
    label: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        position: 'absolute',
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        top: -30,
        left: '50%',
        marginLeft: -AVATAR_SIZE/2,
        marginTop: -AVATAR_SIZE/2,
        boxShadow: '0 0 2px rgba(0,0,0,0.5)'
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    welcomeText: {
        width: 500,
        color: 'white',
        textAlign: 'center',
    }
}));
const Home = props => {
    const classes = useStyles();
    return (
            <Grid
                className={classes.root}
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item className={classes.panelCard}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Avatar src={Johan} className={classes.avatar}/>
                            <Typography variant="h5">Johan lajili </Typography>
                            <Typography variant="subtitle2">
                                Senior JavaScript Contractor
                            </Typography>
                            <Grid
                                className={classes.hero}
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="stretch"
                            >
                                <Grid item container xs={3} direction="column" justify="space-between" alignItems="stretch">
                                        <Grid item xs>
                                            <Typography variant="h3" className="years-of-experience">
                                                8+
                                            </Typography>
                                        </Grid>
                                        <Grid item xs className={classes.label}>
                                            years of experience
                                        </Grid>
                                </Grid>
                                <Grid item xs={6} container direction="column" alignItems="center" justify="flex-start">
                                        <Grid item xs style={{backgroundImage: `url('${ReactLogo}')`}} className="tech-logo react">
                           
                                        </Grid>
                                        <Grid item xs style={{backgroundImage: `url('${AngularLogo}')`}} className="tech-logo angular">
                           
                                        </Grid>
                                    </Grid>
                                <Grid item xs={3} container direction="column" alignItems="center" justify="center">
                                    <Grid item xs>
                                            <div
                                                style={{backgroundImage: `url('${LondonLogo}')`}}
                                                className="london"
                                            />
                                        </Grid>
                                        <Grid item xs className={classes.label}>
                                           Based in London
                                        </Grid>
                                    </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions className={classes.actions}>
                            <Button size="small" color="primary">
                            More info on me on my linkedIn
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item className={classes.panelWelcome} >
                    <Typography variant="subtitle2" className={classes.welcomeText}>
                        So, you're interested in sharing a contract opportunity with me? <br/>
                        Just fill the information asked here and I will contact you as soon as I can!
                    </Typography>
                </Grid>
                <Grid item className={classes.panelButton}>
                    <Button variant="contained" color="primary" className={classes.button}> START </Button>
                </Grid>
            </Grid>
    );
};

export default Home;
