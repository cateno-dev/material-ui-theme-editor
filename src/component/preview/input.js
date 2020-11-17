import React from 'react';
import { TextField, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        padding: theme.spacing.unit
    },
    textdefault: {
        color: theme.palette.text.primary
    }
});

class InputComponent extends React.PureComponent {
    render() {
        const { classes, className } = this.props;
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <p className={classes.textdefault}>Modelo de input</p>
                <TextField id="standard-basic" label="Label" />
            </form>
        );
    }
}

export default withStyles(styles)(InputComponent);