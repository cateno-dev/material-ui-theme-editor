import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = (theme) => ({
  root: {
    padding: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class PreviewButton extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Button className={classes.button}>Default</Button>
          <Button color="primary" className={classes.button}>
            Primary
          </Button>
          <Button color="secondary" className={classes.button}>
            Secondary
          </Button>
        </div>
        <div className={classes.root}>
          <Button className={classes.button} variant="outlined">Default</Button>
          <Button color="primary" className={classes.button} variant="outlined">
            Primary
          </Button>
          <Button color="secondary" className={classes.button} variant="outlined">
            Secondary
          </Button>
        </div>
        <div className={classes.root}>
          <Button className={classes.button} variant="contained">Default</Button>
          <Button color="primary" className={classes.button} variant="contained">
            Primary
          </Button>
          <Button color="secondary" className={classes.button} variant="contained">
            Secondary
          </Button>

        </div>
        <div className={classes.root}>
          <Button color="primary" className={classes.button} variant="fab">
            <AddIcon />
          </Button>
          <Button color="secondary" className={classes.button} variant="fab">
            <DeleteIcon />
          </Button>

        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PreviewButton);
