import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const styles = (theme) => ({
  root: {
    padding: theme.spacing.unit,
  },
  title: {
    color: theme.palette.primary.contrastText
  },
});

class PreviewAppBar extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
    </Typography>
          </Toolbar>
        </AppBar>


      </div>
    );
  }
}

export default withStyles(styles)(PreviewAppBar);
