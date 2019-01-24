import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from "../assets/img/logo.png"

const styles = () => ({
  tool: {
    backgroundColor: "#2C312A",
  },

  typo: {
    color: "#ffffff",
  },
});

function SimpleAppBar(props) {
 const { classes } = props;

 return (
   <div className={classes.root}>
     <AppBar className={classes.app} position="static" color="default">
       <Toolbar className={classes.tool}>
         <Typography className={classes.typo} variant="h6" color="inherit">
         <img src={Logo} alt="game-logo"/> Band of Brothers Brainy Click <img src={Logo} alt="game-logo"/>
         </Typography>
       </Toolbar>
     </AppBar>
   </div>
 );
}

SimpleAppBar.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar); 