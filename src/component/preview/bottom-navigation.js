import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = (theme) => ({
  container: {
    padding: theme.spacing.unit,
  },
  root: {
    backgroundColor: "#1C222E",
    maxWidth: 500,
    boxShadow: "0 0 15px 0 #1F2734"
  },
  wrapper: {
    color: theme.palette.primary.main
  },
  selected: {
    color: theme.palette.secondary.main
  }
});

class PreviewBottomNavigation extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <BottomNavigation
          classes={{
            root: classes.root
          }}
          showLabels
          value={0}
        >
          <BottomNavigationAction classes={{ wrapper: classes.selected }} label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction classes={{ wrapper: classes.wrapper }} label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction classes={{ wrapper: classes.wrapper }} label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(styles)(PreviewBottomNavigation);
