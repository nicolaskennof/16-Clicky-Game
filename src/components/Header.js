import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import Background from '../public/assets/img/background.jpg';
import Score from '../components/Score.js'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 5,
    textAlign: 'center',
    color: "white",
    borderRadius: 0,
    height: "auto",
    backgroundColor: "#2C312A"
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>Band of Brothers Game!</h1>
            <p>Click on an image to earn points, but don't click on any more than once!</p>
            <Score label="Score" value={props.score}></Score> || 
            <Score label=" Highest Score" value={props.hscore}></Score>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
